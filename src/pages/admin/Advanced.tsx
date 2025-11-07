import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Globe, Zap, Save, Loader2 } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { useToast } from "@/hooks/use-toast";

export default function Advanced() {
  const { toast } = useToast();
  const { settings, loading, updateSetting } = useSiteSettings();
  const [localization, setLocalization] = useState({
    defaultLanguage: 'en',
    multiLanguage: false,
    availableLanguages: ['en', 'es', 'fr'],
  });
  const [performance, setPerformance] = useState({
    cdn: true,
    imageOptimization: true,
    lazyLoading: true,
    minification: true,
  });

  useEffect(() => {
    if (settings['advanced_localization' as any]) {
      setLocalization(settings['advanced_localization' as any] as any);
    }
    if (settings['advanced_performance' as any]) {
      setPerformance(settings['advanced_performance' as any] as any);
    }
  }, [settings]);

  const handleSaveLocalization = async () => {
    await updateSetting('advanced_localization' as any, localization);
    toast({ title: "Localization settings saved" });
  };

  const handleSavePerformance = async () => {
    await updateSetting('advanced_performance' as any, performance);
    toast({ title: "Performance settings saved" });
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
          <CardDescription>Multi-language and regional settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="default-language">Default Language</Label>
            <Input
              id="default-language"
              value={localization.defaultLanguage}
              onChange={(e) => setLocalization({ ...localization, defaultLanguage: e.target.value })}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Enable Multi-Language Support</Label>
              <p className="text-sm text-muted-foreground">
                Allow users to switch between languages
              </p>
            </div>
            <Switch
              checked={localization.multiLanguage}
              onCheckedChange={(checked) => setLocalization({ ...localization, multiLanguage: checked })}
            />
          </div>
          <div className="space-y-2">
            <Label>Available Languages</Label>
            <div className="flex flex-wrap gap-2">
              {localization.availableLanguages.map((lang) => (
                <Badge key={lang} variant="secondary">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
          <Button onClick={handleSaveLocalization}>
            <Save className="h-4 w-4 mr-2" />
            Save Language Settings
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Performance Optimization
          </CardTitle>
          <CardDescription>Improve site speed and efficiency</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Enable CDN</Label>
              <p className="text-sm text-muted-foreground">
                Use content delivery network for faster loading
              </p>
            </div>
            <Switch
              checked={performance.cdn}
              onCheckedChange={(checked) => setPerformance({ ...performance, cdn: checked })}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Image Optimization</Label>
              <p className="text-sm text-muted-foreground">
                Automatically optimize images for web
              </p>
            </div>
            <Switch
              checked={performance.imageOptimization}
              onCheckedChange={(checked) => setPerformance({ ...performance, imageOptimization: checked })}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Lazy Loading</Label>
              <p className="text-sm text-muted-foreground">
                Load images and content on demand
              </p>
            </div>
            <Switch
              checked={performance.lazyLoading}
              onCheckedChange={(checked) => setPerformance({ ...performance, lazyLoading: checked })}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Asset Minification</Label>
              <p className="text-sm text-muted-foreground">
                Compress CSS and JavaScript files
              </p>
            </div>
            <Switch
              checked={performance.minification}
              onCheckedChange={(checked) => setPerformance({ ...performance, minification: checked })}
            />
          </div>
          <Button onClick={handleSavePerformance}>
            <Save className="h-4 w-4 mr-2" />
            Save Performance Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
