import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  phone: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  newUserNotifications: boolean;
  contactFormNotifications: boolean;
  weeklyReports: boolean;
  maintenanceMode: boolean;
}

const DEFAULT_SETTINGS: SiteSettings = {
  siteName: "KhisaLab",
  siteDescription: "Professional IT services and solutions",
  contactEmail: "info@labankhisa.co.ke",
  phone: "+1 234 567 8900",
  metaTitle: "KhisaLab - IT Services & Solutions",
  metaDescription: "Professional IT services including web development, cybersecurity, and UI/UX design",
  keywords: "IT services, web development, cybersecurity",
  newUserNotifications: true,
  contactFormNotifications: true,
  weeklyReports: false,
  maintenanceMode: false,
};

export const useSiteSettings = () => {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from("site_settings")
        .select("*");

      if (error) throw error;

      if (data && data.length > 0) {
        const settingsObject: any = { ...DEFAULT_SETTINGS };
        data.forEach((setting) => {
          settingsObject[setting.key] = setting.value;
        });
        setSettings(settingsObject);
      }
    } catch (error: any) {
      console.error("Error fetching settings:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateSetting = async (key: keyof SiteSettings, value: any) => {
    try {
      const { error } = await supabase
        .from("site_settings")
        .upsert({
          key,
          value,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'key'
        });

      if (error) throw error;

      setSettings((prev) => ({ ...prev, [key]: value }));
      
      toast({
        title: "Settings Updated",
        description: "Your changes have been saved successfully.",
      });

      return true;
    } catch (error: any) {
      console.error("Error updating setting:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to update settings",
        variant: "destructive",
      });
      return false;
    }
  };

  const updateMultipleSettings = async (updates: Partial<SiteSettings>) => {
    try {
      const entries = Object.entries(updates).map(([key, value]) => ({
        key,
        value,
        updated_at: new Date().toISOString(),
      }));

      const { error } = await supabase
        .from("site_settings")
        .upsert(entries, {
          onConflict: 'key'
        });

      if (error) throw error;

      setSettings((prev) => ({ ...prev, ...updates }));
      
      toast({
        title: "Settings Updated",
        description: "Your changes have been saved successfully.",
      });

      return true;
    } catch (error: any) {
      console.error("Error updating settings:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to update settings",
        variant: "destructive",
      });
      return false;
    }
  };

  return { settings, loading, updateSetting, updateMultipleSettings, refetch: fetchSettings };
};
