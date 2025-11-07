import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Eye, MousePointer, Clock, Globe, Loader2 } from "lucide-react";

interface PageStats {
  page_url: string;
  count: number;
}

export default function Analytics() {
  const [loading, setLoading] = useState(true);
  const [pageViews, setPageViews] = useState(0);
  const [uniqueUsers, setUniqueUsers] = useState(0);
  const [topPages, setTopPages] = useState<PageStats[]>([]);
  const [eventsByType, setEventsByType] = useState<Record<string, number>>({});

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      // Get total page views
      const { count: totalViews } = await supabase
        .from('analytics_events')
        .select('*', { count: 'exact', head: true })
        .eq('event_type', 'page_view');

      // Get unique users
      const { data: uniqueUsersData } = await supabase
        .from('analytics_events')
        .select('user_id');
      const unique = new Set(uniqueUsersData?.map(e => e.user_id).filter(Boolean)).size;

      // Get top pages
      const { data: pagesData } = await supabase
        .from('analytics_events')
        .select('page_url')
        .eq('event_type', 'page_view');

      const pageCounts: Record<string, number> = {};
      pagesData?.forEach(event => {
        if (event.page_url) {
          pageCounts[event.page_url] = (pageCounts[event.page_url] || 0) + 1;
        }
      });

      const sortedPages = Object.entries(pageCounts)
        .map(([page_url, count]) => ({ page_url, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // Get events by type
      const { data: eventsData } = await supabase
        .from('analytics_events')
        .select('event_type');

      const typeCounts: Record<string, number> = {};
      eventsData?.forEach(event => {
        typeCounts[event.event_type] = (typeCounts[event.event_type] || 0) + 1;
      });

      setPageViews(totalViews || 0);
      setUniqueUsers(unique);
      setTopPages(sortedPages);
      setEventsByType(typeCounts);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  const totalEvents = Object.values(eventsByType).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics & Reports</h2>
        <p className="text-muted-foreground">
          Track your website performance and user engagement
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pageViews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Total page views tracked
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{uniqueUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Distinct users tracked
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalEvents.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              All tracked events
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most visited pages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.length > 0 ? (
                topPages.map((item) => (
                  <div key={item.page_url} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium">{item.page_url}</div>
                      <div className="text-sm text-muted-foreground">{item.count} views</div>
                    </div>
                    <div className="text-sm font-medium">
                      {((item.count / pageViews) * 100).toFixed(1)}%
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No page view data yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Event Types</CardTitle>
            <CardDescription>Events tracked by type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(eventsByType).length > 0 ? (
                Object.entries(eventsByType)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 5)
                  .map(([type, count]) => (
                    <div key={type} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium capitalize">{type.replace('_', ' ')}</div>
                        <div className="text-sm text-muted-foreground">{count} events</div>
                      </div>
                      <div className="text-sm font-medium">
                        {((count / totalEvents) * 100).toFixed(1)}%
                      </div>
                    </div>
                  ))
              ) : (
                <p className="text-sm text-muted-foreground">No event data yet</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
