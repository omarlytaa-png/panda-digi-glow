import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "We think outside the box to deliver unique and innovative solutions.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and methodologies to stay ahead.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Animated Hero Section with Parallax */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-blue">About</span> <span className="text-gradient-red">Panda Tech</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted technology and design partner in Kenya, committed to transforming ideas into reality
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        {/* Company Story */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Founded in the heart of Nairobi, Panda Tech emerged from a simple vision: to make professional technology and design services accessible to businesses of all sizes across Kenya.
              </p>
              <p>
                What started as a small team of passionate developers and designers has grown into a full-service digital agency, serving clients across East Africa. We specialize in web development, software solutions, graphic design, cybersecurity, and IT services.
              </p>
              <p>
                Located at Precious Plaza in Kawangware, along Naivasha Road, we're proud to be part of the vibrant Nairobi tech ecosystem. Our team combines local insight with global best practices to deliver solutions that truly work for African businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Target className="text-primary mr-3" size={32} />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground">
                To empower businesses with cutting-edge technology solutions and creative design services that drive growth, enhance security, and build lasting digital presence.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Eye className="text-primary mr-3" size={32} />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground">
                To be East Africa's leading technology and design company, recognized for innovation, reliability, and transformative digital solutions that shape the future of business.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-card text-center hover:shadow-hover transition-smooth"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A diverse team of talented professionals passionate about technology and design
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-muted p-8 rounded-lg text-center">
            <p className="text-muted-foreground text-lg">
              Our team consists of experienced developers, designers, security experts, and project managers who bring together years of combined expertise. We're united by our passion for creating exceptional digital solutions and our commitment to client success.
            </p>
          </div>
        </section>

        {/* Location */}
        <section>
          <div className="max-w-4xl mx-auto bg-primary text-primary-foreground p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
            <p className="text-xl mb-2">Precious Plaza, Kawangware</p>
            <p className="text-xl mb-2">Naivasha Road, Nairobi, Kenya</p>
            <p className="text-lg opacity-90">Monday – Saturday: 8 AM – 6 PM</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
