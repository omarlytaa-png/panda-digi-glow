import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import * as LucideIcons from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import heroImage from "@/assets/hero-workspace.jpg";
import { supabase } from "@/integrations/supabase/client";

const Home = () => {
  const [services, setServices] = useState<any[]>([]);
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [servicesRes, portfolioRes, testimonialsRes] = await Promise.all([
        supabase.from("services").select("*").eq("active", true).order("display_order").limit(4),
        supabase.from("portfolio_items").select("*").eq("active", true).eq("featured", true).order("display_order").limit(3),
        supabase.from("testimonials").select("*").eq("active", true).order("display_order").limit(2),
      ]);

      if (servicesRes.data) {
        const servicesWithIcons = servicesRes.data.map((service) => ({
          ...service,
          icon: (LucideIcons as any)[service.icon] || LucideIcons.Code,
        }));
        setServices(servicesWithIcons);
      }
      
      if (portfolioRes.data) setPortfolioItems(portfolioRes.data);
      if (testimonialsRes.data) setTestimonials(testimonialsRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const reasons = [
    "10+ Years of Combined Experience",
    "100+ Successful Projects Delivered",
    "Affordable & Transparent Pricing",
    "24/7 Customer Support",
    "Fast Turnaround Time",
    "Free Consultation",
  ];

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Animated Hero Section with Parallax */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient-red">We Design, Build,</span>
            <br />
            <span className="text-gradient-blue">and Secure Your Digital World</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Kenya's premier technology and design partner for innovative businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">
                Get a Quote <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="glass" className="text-lg px-8" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-3d">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-3d">Why Choose Panda Tech?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're committed to delivering excellence in every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 glass-clean p-4 rounded-lg"
              >
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <span className="font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-3d">Our Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See what we've created for our amazing clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((project) => (
              <PortfolioCard 
                key={project.id} 
                image={project.image_url}
                title={project.title}
                category={project.category}
                description={project.description}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-3d">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-clean p-8 rounded-lg"
              >
                <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-3d">Get In Touch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-foreground">
            Let's bring your ideas to life with our expert team
          </p>
          <Button size="lg" className="text-lg px-8" asChild>
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
