import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Save, Loader2 } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

export default function Settings() {
  const { settings, loading, updateMultipleSettings, updateSetting } = useSiteSettings();
  const [generalInfo, setGeneralInfo] = useState({
    siteName: "",
    siteDescription: "",
    contactEmail: "",
    phone: "",
  });
  const [seoSettings, setSeoSettings] = useState({
    metaTitle: "",
    metaDescription: "",
    keywords: "",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading) {
      setGeneralInfo({
        siteName: settings.siteName,
        siteDescription: settings.siteDescription,
        contactEmail: settings.contactEmail,
        phone: settings.phone,
      });
      setSeoSettings({
        metaTitle: settings.metaTitle,
        metaDescription: settings.metaDescription,
        keywords: settings.keywords,
      });
    }
  }, [loading, settings]);

  const handleSaveGeneral = async () => {
    setSaving(true);
    await updateMultipleSettings(generalInfo);
    setSaving(false);
  };

  const handleSaveSEO = async () => {
    setSaving(true);
    await updateMultipleSettings(seoSettings);
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

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
            <Input
              id="site-name"
              value={generalInfo.siteName}
              onChange={(e) => setGeneralInfo({ ...generalInfo, siteName: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="site-description">Site Description</Label>
            <Textarea
              id="site-description"
              value={generalInfo.siteDescription}
              onChange={(e) => setGeneralInfo({ ...generalInfo, siteDescription: e.target.value })}
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">Contact Email</Label>
            <Input
              id="contact-email"
              type="email"
              value={generalInfo.contactEmail}
              onChange={(e) => setGeneralInfo({ ...generalInfo, contactEmail: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={generalInfo.phone}
              onChange={(e) => setGeneralInfo({ ...generalInfo, phone: e.target.value })}
            />
          </div>
          <Button onClick={handleSaveGeneral} disabled={saving}>
            {saving ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
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
            <Input
              id="meta-title"
              value={seoSettings.metaTitle}
              onChange={(e) => setSeoSettings({ ...seoSettings, metaTitle: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="meta-description">Meta Description</Label>
            <Textarea
              id="meta-description"
              value={seoSettings.metaDescription}
              onChange={(e) => setSeoSettings({ ...seoSettings, metaDescription: e.target.value })}
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="keywords">Keywords</Label>
            <Input
              id="keywords"
              value={seoSettings.keywords}
              onChange={(e) => setSeoSettings({ ...seoSettings, keywords: e.target.value })}
            />
          </div>
          <Button onClick={handleSaveSEO} disabled={saving}>
            {saving ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
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
            <Switch
              checked={settings.newUserNotifications}
              onCheckedChange={(checked) => updateSetting("newUserNotifications", checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Contact Form Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Get notified of new contact submissions
              </p>
            </div>
            <Switch
              checked={settings.contactFormNotifications}
              onCheckedChange={(checked) => updateSetting("contactFormNotifications", checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Weekly Reports</Label>
              <p className="text-sm text-muted-foreground">
                Receive weekly analytics summary
              </p>
            </div>
            <Switch
              checked={settings.weeklyReports}
              onCheckedChange={(checked) => updateSetting("weeklyReports", checked)}
            />
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
            <Switch
              checked={settings.maintenanceMode}
              onCheckedChange={(checked) => updateSetting("maintenanceMode", checked)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
