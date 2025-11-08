import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export const usePageTracking = () => {
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const trackPageView = async () => {
      try {
        await supabase.from("analytics_events").insert({
          event_type: "page_view",
          event_name: "Page View",
          page_url: location.pathname,
          user_id: user?.id || null,
          metadata: {
            timestamp: new Date().toISOString(),
            referrer: document.referrer,
            user_agent: navigator.userAgent,
          },
        });
      } catch (error) {
        console.error("Error tracking page view:", error);
      }
    };

    trackPageView();
  }, [location.pathname, user?.id]);
};
