import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Save } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Site Settings</h2>
        <p className="text-muted-foreground">
          Configure your website's general settings
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Information</CardTitle>
          <CardDescription>Basic details about your website</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="site-name">Site Name</Label>
            <Input id="site-name" defaultValue="KhisaLab" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="site-description">Site Description</Label>
            <Textarea
              id="site-description"
              defaultValue="Professional IT services and solutions"
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">Contact Email</Label>
            <Input id="contact-email" type="email" defaultValue="info@khisalab.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" defaultValue="+1 234 567 8900" />
          </div>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SEO Settings</CardTitle>
          <CardDescription>Optimize your site for search engines</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="meta-title">Meta Title</Label>
            <Input id="meta-title" defaultValue="KhisaLab - IT Services & Solutions" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="meta-description">Meta Description</Label>
            <Textarea
              id="meta-description"
              defaultValue="Professional IT services including web development, cybersecurity, and UI/UX design"
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="keywords">Keywords</Label>
            <Input id="keywords" defaultValue="IT services, web development, cybersecurity" />
          </div>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save SEO Settings
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Email & Notifications</CardTitle>
          <CardDescription>Configure email and notification settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>New User Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive email when new users sign up
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Contact Form Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Get notified of new contact submissions
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Weekly Reports</Label>
              <p className="text-sm text-muted-foreground">
                Receive weekly analytics summary
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Maintenance Mode</CardTitle>
          <CardDescription>Temporarily disable public access to your site</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Enable Maintenance Mode</Label>
              <p className="text-sm text-muted-foreground">
                Show maintenance page to visitors (admins can still access)
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
