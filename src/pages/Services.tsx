import { Code, Smartphone, Database, ShoppingCart, Palette, FileImage, Award, FileText, Shield, Network, HardDrive, BookOpen } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const webSoftwareServices = [
    {
      icon: Code,
      title: "Website Development",
      description: "Professional, responsive websites that work perfectly on all devices.",
      features: ["Custom Website Design", "E-commerce Solutions", "Content Management Systems", "Website Maintenance"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["iOS & Android Apps", "Cross-platform Solutions", "App Store Deployment", "App Maintenance"],
    },
    {
      icon: Database,
      title: "CRM Systems",
      description: "Custom CRM solutions to manage your customer relationships effectively.",
      features: ["Custom CRM Development", "Integration Services", "Data Migration", "Training & Support"],
    },
    {
      icon: ShoppingCart,
      title: "Custom Software",
      description: "Tailored software solutions for your unique business requirements.",
      features: ["Enterprise Software", "Automation Tools", "API Integration", "Cloud Solutions"],
    },
  ];

  const designServices = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete branding packages that make your business stand out.",
      features: ["Logo Design", "Brand Guidelines", "Business Cards", "Letterheads"],
    },
    {
      icon: FileImage,
      title: "Marketing Materials",
      description: "Eye-catching designs for all your marketing needs.",
      features: ["Flyers & Brochures", "Posters & Banners", "Social Media Graphics", "Email Templates"],
    },
    {
      icon: Award,
      title: "Certificate Design",
      description: "Professional certificate designs and replacements.",
      features: ["Custom Certificates", "Award Designs", "Certificate Printing", "Digital Certificates"],
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "All types of graphic design services for your business.",
      features: ["Packaging Design", "Infographics", "Presentation Design", "Event Materials"],
    },
  ];

  const cyberServices = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      features: ["Security Audits", "Threat Detection", "Data Protection", "Security Training"],
    },
    {
      icon: Network,
      title: "Network Setup",
      description: "Professional network infrastructure design and implementation.",
      features: ["Network Design", "Server Setup", "WiFi Solutions", "Network Monitoring"],
    },
    {
      icon: HardDrive,
      title: "IT Support",
      description: "Reliable IT support to keep your business running smoothly.",
      features: ["24/7 Support", "System Maintenance", "Hardware Support", "Software Support"],
    },
    {
      icon: Shield,
      title: "Data Backup",
      description: "Secure backup solutions to protect your critical business data.",
      features: ["Cloud Backup", "Local Backup", "Disaster Recovery", "Data Migration"],
    },
  ];

  const documentationServices = [
    {
      icon: FileText,
      title: "Business Documentation",
      description: "Professional documentation for your business needs.",
      features: ["Business Reports", "Company Profiles", "Proposals", "Tender Documents"],
    },
    {
      icon: BookOpen,
      title: "Academic Projects",
      description: "Support for academic project documentation and presentation.",
      features: ["Research Papers", "Project Reports", "Presentations", "Technical Writing"],
    },
    {
      icon: FileText,
      title: "Project Documentation",
      description: "Comprehensive project documentation services.",
      features: ["User Manuals", "Technical Documentation", "API Documentation", "Training Materials"],
    },
    {
      icon: Award,
      title: "Professional Services",
      description: "Additional professional documentation services.",
      features: ["CVs & Resumes", "Cover Letters", "Portfolio Design", "Case Studies"],
    },
  ];

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

        {/* Web & Software Development */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Web & Software Development</h2>
            <p className="text-muted-foreground text-lg">
              Custom digital solutions built with the latest technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webSoftwareServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Graphic Design & Branding */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Graphic Design & Branding</h2>
            <p className="text-muted-foreground text-lg">
              Creative designs that bring your brand vision to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Cyber & IT Services */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Cyber & IT Services</h2>
            <p className="text-muted-foreground text-lg">
              Secure and reliable IT infrastructure for your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cyberServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Projects & Documentation */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Projects & Documentation</h2>
            <p className="text-muted-foreground text-lg">
              Professional documentation services for all your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentationServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

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
