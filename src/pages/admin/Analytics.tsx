import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Eye, MousePointer, Clock, Globe } from "lucide-react";

export default function Analytics() {
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
            <div className="text-2xl font-bold">12,543</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-600" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,821</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-600" />
              +8.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3m 24s</div>
            <p className="text-xs text-muted-foreground">
              Average time on site
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42.3%</div>
            <p className="text-xs text-muted-foreground">
              -3.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Country</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">🇺🇸 USA</div>
            <p className="text-xs text-muted-foreground">
              34% of total traffic
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8%</div>
            <p className="text-xs text-muted-foreground">
              Contact form submissions
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most visited pages this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { page: "/", views: "3,245", percentage: "25.8%" },
                { page: "/services", views: "2,891", percentage: "23.1%" },
                { page: "/portfolio", views: "2,103", percentage: "16.8%" },
                { page: "/blog", views: "1,876", percentage: "14.9%" },
                { page: "/contact", views: "1,428", percentage: "11.4%" },
              ].map((item) => (
                <div key={item.page} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium">{item.page}</div>
                    <div className="text-sm text-muted-foreground">{item.views} views</div>
                  </div>
                  <div className="text-sm font-medium">{item.percentage}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where your visitors come from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { source: "Organic Search", visitors: "1,834", percentage: "48%" },
                { source: "Direct", visitors: "954", percentage: "25%" },
                { source: "Social Media", visitors: "573", percentage: "15%" },
                { source: "Referral", visitors: "306", percentage: "8%" },
                { source: "Email", visitors: "154", percentage: "4%" },
              ].map((item) => (
                <div key={item.source} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium">{item.source}</div>
                    <div className="text-sm text-muted-foreground">{item.visitors} visitors</div>
                  </div>
                  <div className="text-sm font-medium">{item.percentage}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
