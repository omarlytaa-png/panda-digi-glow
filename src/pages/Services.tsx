import { useEffect, useState } from "react";
import * as LucideIcons from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { supabase } from "@/integrations/supabase/client";

const Services = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("active", true)
        .order("display_order");

      if (error) throw error;

      const servicesWithIcons = (data || []).map((service) => ({
        ...service,
        icon: (LucideIcons as any)[service.icon] || LucideIcons.Code,
      }));

      setServices(servicesWithIcons);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology and design solutions to power your business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We offer tailored packages to meet your specific requirements and budget
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-lg font-medium px-8 py-3 bg-background text-foreground hover:bg-background/90 transition-smooth"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
};

export default Services;
