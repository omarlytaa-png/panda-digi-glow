import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Key, Activity, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Security() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Security & Access Control</h2>
        <p className="text-muted-foreground">
          Monitor and manage your site's security settings
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security Score</CardTitle>
            <Shield className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">92/100</div>
            <p className="text-xs text-muted-foreground">Excellent</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Logins</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Current admin sessions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">2FA Enabled</CardTitle>
            <Key className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2/5</div>
            <p className="text-xs text-muted-foreground">Admins with 2FA</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Security Recommendations</CardTitle>
          <CardDescription>Suggestions to improve your site's security</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <Shield className="h-5 w-5 text-green-600 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">SSL Certificate Active</h4>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    Secure
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Your site is using HTTPS encryption
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">Enable Two-Factor Authentication</h4>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
                    Recommended
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Only 40% of admins have 2FA enabled. This adds an extra layer of security.
                </p>
                <Button variant="outline" size="sm" className="mt-2">
                  Configure 2FA
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <Shield className="h-5 w-5 text-green-600 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">Regular Backups</h4>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    Active
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Automatic daily backups are configured and running
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Security Events</CardTitle>
          <CardDescription>Monitor recent security-related activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { event: "Admin login", user: "admin@khisalab.com", time: "2 minutes ago", type: "success" },
              { event: "Failed login attempt", user: "unknown@example.com", time: "1 hour ago", type: "warning" },
              { event: "Role changed", user: "user@example.com", time: "3 hours ago", type: "info" },
              { event: "Password reset", user: "test@example.com", time: "5 hours ago", type: "info" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium">{item.event}</div>
                  <div className="text-sm text-muted-foreground">{item.user}</div>
                </div>
                <div className="text-sm text-muted-foreground">{item.time}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
