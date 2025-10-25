import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Globe, Zap, Link, Clock, Save } from "lucide-react";

export default function Advanced() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Advanced Settings</h2>
        <p className="text-muted-foreground">
          Configure advanced features and integrations
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Localization
          </CardTitle>
          <CardDescription>Manage languages and regional settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="default-language">Default Language</Label>
            <Input id="default-language" defaultValue="English (US)" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Enable Multi-Language Support</Label>
              <p className="text-sm text-muted-foreground">
                Allow users to switch between languages
              </p>
            </div>
            <Switch />
          </div>
          <div className="space-y-2">
            <Label>Available Languages</Label>
            <div className="space-y-2">
              {["English", "Spanish", "French", "German"].map((lang) => (
                <div key={lang} className="flex items-center justify-between p-3 border rounded-lg">
                  <span>{lang}</span>
                  <Switch defaultChecked={lang === "English"} />
                </div>
              ))}
            </div>
          </div>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Language Settings
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link className="h-5 w-5" />
            API Integrations
          </CardTitle>
          <CardDescription>Connect third-party services</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {[
              { name: "Google Analytics", connected: true },
              { name: "Mailchimp", connected: false },
              { name: "Stripe", connected: false },
              { name: "Zapier", connected: false },
            ].map((integration) => (
              <div key={integration.name} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="font-medium">{integration.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {integration.connected ? "Connected" : "Not connected"}
                  </div>
                </div>
                <Button variant={integration.connected ? "outline" : "default"} size="sm">
                  {integration.connected ? "Configure" : "Connect"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Scheduled Jobs
          </CardTitle>
          <CardDescription>Manage automated tasks and cron jobs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { task: "Database Backup", schedule: "Daily at 2:00 AM", active: true },
              { task: "Email Digest", schedule: "Weekly on Monday", active: true },
              { task: "Cache Cleanup", schedule: "Every 6 hours", active: true },
              { task: "Analytics Report", schedule: "Monthly", active: false },
            ].map((job) => (
              <div key={job.task} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{job.task}</div>
                  <div className="text-sm text-muted-foreground">{job.schedule}</div>
                </div>
                <div className="flex items-center gap-3">
                  <Switch defaultChecked={job.active} />
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-4">
            <Clock className="h-4 w-4 mr-2" />
            Add New Job
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Performance Optimization
          </CardTitle>
          <CardDescription>Advanced performance settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Enable CDN</Label>
              <p className="text-sm text-muted-foreground">
                Use Content Delivery Network for faster loading
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Image Optimization</Label>
              <p className="text-sm text-muted-foreground">
                Automatically optimize images on upload
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Lazy Loading</Label>
              <p className="text-sm text-muted-foreground">
                Load images and content as user scrolls
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Minify Assets</Label>
              <p className="text-sm text-muted-foreground">
                Compress CSS and JavaScript files
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
