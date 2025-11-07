import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Palette, Layout, Type, Image as ImageIcon, Save, Loader2 } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { useToast } from "@/hooks/use-toast";

export default function Appearance() {
  const { toast } = useToast();
  const { settings, loading, updateSetting } = useSiteSettings();
  const [colors, setColors] = useState({
    primary: '#3B82F6',
    secondary: '#10B981',
    accent: '#8B5CF6',
  });
  const [typography, setTypography] = useState({
    headingFont: 'Inter',
    bodyFont: 'Inter',
    fontSize: '16px',
  });
  const [customCSS, setCustomCSS] = useState('');

  useEffect(() => {
    if (settings['appearance_colors' as any]) {
      setColors(settings['appearance_colors' as any] as any);
    }
    if (settings['appearance_typography' as any]) {
      setTypography(settings['appearance_typography' as any] as any);
    }
    if (settings['appearance_custom_css' as any]) {
      setCustomCSS(settings['appearance_custom_css' as any] as string);
    }
  }, [settings]);

  const handleSaveColors = async () => {
    await updateSetting('appearance_colors' as any, colors);
    toast({ title: "Colors saved successfully" });
  };

  const handleSaveTypography = async () => {
    await updateSetting('appearance_typography' as any, typography);
    toast({ title: "Typography saved successfully" });
  };

  const handleSaveCSS = async () => {
    await updateSetting('appearance_custom_css' as any, customCSS);
    toast({ title: "Custom CSS saved successfully" });
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
        <h2 className="text-3xl font-bold tracking-tight">Customization & Appearance</h2>
        <p className="text-muted-foreground">
          Manage your site's visual appearance and theme
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Color Scheme
            </CardTitle>
            <CardDescription>Customize your brand colors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="primary-color">Primary Color</Label>
              <div className="flex gap-2">
                <Input
                  id="primary-color"
                  type="color"
                  value={colors.primary}
                  onChange={(e) => setColors({ ...colors, primary: e.target.value })}
                  className="w-20 h-10"
                />
                <Input value={colors.primary} onChange={(e) => setColors({ ...colors, primary: e.target.value })} className="flex-1" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="secondary-color">Secondary Color</Label>
              <div className="flex gap-2">
                <Input
                  id="secondary-color"
                  type="color"
                  value={colors.secondary}
                  onChange={(e) => setColors({ ...colors, secondary: e.target.value })}
                  className="w-20 h-10"
                />
                <Input value={colors.secondary} onChange={(e) => setColors({ ...colors, secondary: e.target.value })} className="flex-1" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="accent-color">Accent Color</Label>
              <div className="flex gap-2">
                <Input
                  id="accent-color"
                  type="color"
                  value={colors.accent}
                  onChange={(e) => setColors({ ...colors, accent: e.target.value })}
                  className="w-20 h-10"
                />
                <Input value={colors.accent} onChange={(e) => setColors({ ...colors, accent: e.target.value })} className="flex-1" />
              </div>
            </div>
            <Button onClick={handleSaveColors}>
              <Save className="h-4 w-4 mr-2" />
              Save Colors
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Type className="h-5 w-5" />
              Typography
            </CardTitle>
            <CardDescription>Customize fonts and text styles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="heading-font">Heading Font</Label>
              <Input id="heading-font" value={typography.headingFont} onChange={(e) => setTypography({ ...typography, headingFont: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="body-font">Body Font</Label>
              <Input id="body-font" value={typography.bodyFont} onChange={(e) => setTypography({ ...typography, bodyFont: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="font-size">Base Font Size</Label>
              <Input id="font-size" value={typography.fontSize} onChange={(e) => setTypography({ ...typography, fontSize: e.target.value })} />
            </div>
            <Button onClick={handleSaveTypography}>
              <Save className="h-4 w-4 mr-2" />
              Save Typography
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layout className="h-5 w-5" />
            Layout Settings
          </CardTitle>
          <CardDescription>Configure page layouts and navigation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border rounded-lg cursor-pointer hover:border-primary transition-smooth">
              <div className="aspect-video bg-muted rounded mb-2"></div>
              <div className="text-sm font-medium">Classic Layout</div>
            </div>
            <div className="p-4 border-2 border-primary rounded-lg cursor-pointer">
              <div className="aspect-video bg-muted rounded mb-2"></div>
              <div className="text-sm font-medium">Modern Layout (Active)</div>
            </div>
            <div className="p-4 border rounded-lg cursor-pointer hover:border-primary transition-smooth">
              <div className="aspect-video bg-muted rounded mb-2"></div>
              <div className="text-sm font-medium">Minimal Layout</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5" />
            Logo & Branding
          </CardTitle>
          <CardDescription>Upload and manage your brand assets</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Logo</Label>
            <div className="flex items-center gap-4">
              <div className="w-32 h-32 border rounded-lg flex items-center justify-center bg-muted">
                <ImageIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <Button variant="outline" size="sm">Upload Logo</Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Recommended: 512x512px, PNG or SVG
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Favicon</Label>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 border rounded-lg flex items-center justify-center bg-muted">
                <ImageIcon className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <Button variant="outline" size="sm">Upload Favicon</Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Recommended: 32x32px or 64x64px, ICO or PNG
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom CSS</CardTitle>
          <CardDescription>Add custom styles to your site</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="custom-css">Custom CSS Code</Label>
            <textarea
              id="custom-css"
              className="w-full h-48 p-3 rounded-md border bg-muted font-mono text-sm"
              placeholder="/* Add your custom CSS here */
.custom-class {
  color: #10B981;
  font-weight: bold;
}"
              value={customCSS}
              onChange={(e) => setCustomCSS(e.target.value)}
            />
            <Button onClick={handleSaveCSS}>
              <Save className="h-4 w-4 mr-2" />
              Save Custom CSS
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
