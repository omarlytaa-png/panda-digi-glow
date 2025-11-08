import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ShieldCheck, Activity, TrendingUp, FileText, AlertCircle } from "lucide-react";
import { Loader2 } from "lucide-react";

export default function Overview() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    admins: 0,
    moderators: 0,
    recentSignups: 0,
    totalPosts: 0,
    totalViews: 0,
    totalVisitors: 0,
    weeklyViews: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [profilesRes, rolesRes, postsRes, analyticsRes] = await Promise.all([
        supabase.from("profiles").select("*", { count: "exact" }),
        supabase.from("user_roles").select("*"),
        supabase.from("blog_posts").select("*", { count: "exact" }),
        supabase.from("analytics_events").select("*", { count: "exact" }),
      ]);

      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const recentUsers = await supabase
        .from("profiles")
        .select("*", { count: "exact" })
        .gte("created_at", sevenDaysAgo.toISOString());

      const weeklyAnalytics = await supabase
        .from("analytics_events")
        .select("*", { count: "exact" })
        .eq("event_type", "page_view")
        .gte("created_at", sevenDaysAgo.toISOString());

      // Get unique visitors (by user_id) for total visitors
      const allVisitors = await supabase
        .from("analytics_events")
        .select("user_id")
        .eq("event_type", "page_view");

      const uniqueVisitors = new Set(allVisitors.data?.filter(v => v.user_id).map(v => v.user_id) || []).size;

      setStats({
        totalUsers: profilesRes.count || 0,
        admins: rolesRes.data?.filter((r) => r.role === "admin").length || 0,
        moderators: rolesRes.data?.filter((r) => r.role === "moderator").length || 0,
        recentSignups: recentUsers.count || 0,
        totalPosts: postsRes.count || 0,
        totalViews: analyticsRes.count || 0,
        totalVisitors: uniqueVisitors,
        weeklyViews: weeklyAnalytics.count || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
        <p className="text-muted-foreground">
          Welcome to your admin dashboard. Here's what's happening with your site.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalViews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +{stats.weeklyViews} this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalVisitors.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Unique visitors tracked</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              +{stats.recentSignups} in the last 7 days
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Admins</CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.admins}</div>
            <p className="text-xs text-muted-foreground">Active administrators</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Moderators</CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.moderators}</div>
            <p className="text-xs text-muted-foreground">Active moderators</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.recentSignups}</div>
            <p className="text-xs text-muted-foreground">New sign-ups this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Content</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalPosts}</div>
            <p className="text-xs text-muted-foreground">Published blog posts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Healthy</div>
            <p className="text-xs text-muted-foreground">All systems operational</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <a
              href="/admin/users"
              className="block p-3 rounded-lg border hover:bg-muted transition-smooth"
            >
              <div className="font-medium">Manage Users</div>
              <div className="text-sm text-muted-foreground">
                View and update user roles
              </div>
            </a>
            <a
              href="/admin/content"
              className="block p-3 rounded-lg border hover:bg-muted transition-smooth"
            >
              <div className="font-medium">Manage Content</div>
              <div className="text-sm text-muted-foreground">
                Create and edit blog posts
              </div>
            </a>
            <a
              href="/admin/settings"
              className="block p-3 rounded-lg border hover:bg-muted transition-smooth"
            >
              <div className="font-medium">Site Settings</div>
              <div className="text-sm text-muted-foreground">
                Configure general settings
              </div>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
              <AlertCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <div className="font-medium text-sm text-green-900 dark:text-green-100">
                  No critical issues
                </div>
                <div className="text-xs text-green-700 dark:text-green-300">
                  All systems running smoothly
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
