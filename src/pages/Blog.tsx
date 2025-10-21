import { Calendar, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      title: "Web Design Trends 2025: What's Hot in Kenya",
      excerpt: "Discover the latest web design trends shaping the Kenyan digital landscape in 2025. From minimalism to bold typography.",
      author: "Panda Tech Team",
      date: "March 15, 2025",
      category: "Web Design",
    },
    {
      title: "Cybersecurity for Small Businesses: A Practical Guide",
      excerpt: "Essential cybersecurity practices every small business in Kenya should implement to protect their data and customers.",
      author: "Security Team",
      date: "March 10, 2025",
      category: "Cybersecurity",
    },
    {
      title: "How to Choose the Right CRM for Your Business",
      excerpt: "A comprehensive guide to selecting and implementing the perfect CRM system for your growing business.",
      author: "Development Team",
      date: "March 5, 2025",
      category: "Software",
    },
    {
      title: "The Power of Brand Identity: Why Your Logo Matters",
      excerpt: "Understanding how strong brand identity can transform your business and attract the right customers.",
      author: "Design Team",
      date: "February 28, 2025",
      category: "Branding",
    },
    {
      title: "Mobile-First Design: Why It's Essential in 2025",
      excerpt: "Why prioritizing mobile users is crucial for your website's success in today's smartphone-dominated world.",
      author: "Panda Tech Team",
      date: "February 20, 2025",
      category: "Mobile",
    },
    {
      title: "IT Support Best Practices for Growing Companies",
      excerpt: "How to set up reliable IT support infrastructure as your company scales and technology needs evolve.",
      author: "IT Team",
      date: "February 15, 2025",
      category: "IT Services",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert insights, industry trends, and practical tips for your digital journey
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-smooth">
              <CardHeader>
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <section className="mt-20 bg-primary text-primary-foreground p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter for the latest tech insights and updates
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-foreground"
            />
            <button className="px-6 py-3 bg-background text-foreground rounded-md font-medium hover:bg-background/90 transition-smooth">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
