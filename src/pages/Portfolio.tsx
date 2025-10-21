import PortfolioCard from "@/components/PortfolioCard";
import portfolioWeb from "@/assets/portfolio-web.jpg";
import portfolioDesign from "@/assets/portfolio-design.jpg";
import portfolioSecurity from "@/assets/portfolio-security.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: portfolioWeb,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern online store with payment integration and inventory management.",
    },
    {
      image: portfolioDesign,
      title: "Brand Identity Package",
      category: "Graphic Design",
      description: "Complete branding solution including logo, business cards, and marketing materials.",
    },
    {
      image: portfolioSecurity,
      title: "Network Security System",
      category: "Cybersecurity",
      description: "Enterprise-grade security implementation for a financial services company.",
    },
    {
      image: portfolioWeb,
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure mobile banking application with biometric authentication.",
    },
    {
      image: portfolioDesign,
      title: "Restaurant Branding",
      category: "Graphic Design",
      description: "Complete visual identity including menu design and signage for a restaurant chain.",
    },
    {
      image: portfolioWeb,
      title: "CRM System",
      category: "Software Development",
      description: "Custom CRM solution for a real estate company managing 1000+ properties.",
    },
  ];

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
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
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
