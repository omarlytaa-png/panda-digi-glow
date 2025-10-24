import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {

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
          {blogPosts.map((post) => (
            <Card key={post.id} className="shadow-card hover:shadow-hover transition-smooth flex flex-col">
              <CardHeader>
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <Button variant="outline" className="w-full">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
