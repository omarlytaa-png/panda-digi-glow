import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, Palette, Shield, FileText, ArrowRight, CheckCircle } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import heroImage from "@/assets/hero-image.jpg";
import portfolioWeb from "@/assets/portfolio-web.jpg";
import portfolioDesign from "@/assets/portfolio-design.jpg";
import portfolioSecurity from "@/assets/portfolio-security.jpg";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Web & Software Development",
      description: "Custom websites, mobile apps, CRMs, and enterprise software solutions.",
      features: ["Responsive Websites", "Mobile Applications", "Custom CRM Systems", "E-commerce Solutions"],
    },
    {
      icon: Palette,
      title: "Graphic Design & Branding",
      description: "Professional designs that make your brand stand out from the competition.",
      features: ["Logo Design", "Brand Identity", "Flyers & Posters", "Certificate Design"],
    },
    {
      icon: Shield,
      title: "Cyber & IT Services",
      description: "Comprehensive cybersecurity and IT support to protect your business.",
      features: ["Cybersecurity Solutions", "Network Setup", "IT Support", "Data Protection"],
    },
    {
      icon: FileText,
      title: "Projects & Documentation",
      description: "Professional documentation services for your business and academic needs.",
      features: ["Business Reports", "Project Proposals", "Company Profiles", "Academic Projects"],
    },
  ];

  const featuredProjects = [
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
  ];

  const reasons = [
    "10+ Years of Combined Experience",
    "100+ Successful Projects Delivered",
    "Affordable & Transparent Pricing",
    "24/7 Customer Support",
    "Fast Turnaround Time",
    "Free Consultation",
  ];

  const testimonials = [
    {
      name: "Sarah Mwangi",
      role: "CEO, TechStart Kenya",
      content: "Panda Tech transformed our digital presence. Their team is professional, creative, and delivers on time.",
    },
    {
      name: "John Ochieng",
      role: "Founder, Creative Hub",
      content: "Excellent service! They built our website and mobile app from scratch. Highly recommended!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.85), rgba(16, 185, 129, 0.2)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            We Design, Build, and Secure<br />Your Digital World
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Kenya's premier technology and design partner for innovative businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">
                Get a Quote <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-foreground" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Panda Tech?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're committed to delivering excellence in every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-background p-4 rounded-lg shadow-card"
              >
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <span className="font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See what we've created for our amazing clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <PortfolioCard key={index} {...project} />
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-lg shadow-card"
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's bring your ideas to life with our expert team
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
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
