import { useEffect, useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import { supabase } from "@/integrations/supabase/client";

const Portfolio = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from("portfolio_items")
        .select("*")
        .eq("active", true)
        .order("display_order");

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our best work and successful client projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PortfolioCard 
              key={project.id}
              image={project.image_url}
              title={project.title}
              category={project.category}
              description={project.description}
            />
          ))}
        </div>

        {/* CTA */}
        <section className="mt-20 bg-muted p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to view our complete portfolio and discuss how we can help with your project
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-lg font-medium px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
