import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getBlogPostById } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getBlogPostById(id) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Convert markdown-style content to JSX
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let key = 0;

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (!trimmedLine) {
        elements.push(<div key={`space-${key++}`} className="h-4" />);
        return;
      }

      // Headers
      if (trimmedLine.startsWith('# ')) {
        elements.push(
          <h1 key={`h1-${key++}`} className="text-4xl font-bold mb-6 mt-8">
            {trimmedLine.substring(2)}
          </h1>
        );
      } else if (trimmedLine.startsWith('## ')) {
        elements.push(
          <h2 key={`h2-${key++}`} className="text-3xl font-bold mb-4 mt-8">
            {trimmedLine.substring(3)}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${key++}`} className="text-2xl font-bold mb-3 mt-6">
            {trimmedLine.substring(4)}
          </h3>
        );
      } else if (trimmedLine.startsWith('#### ')) {
        elements.push(
          <h4 key={`h4-${key++}`} className="text-xl font-bold mb-2 mt-4">
            {trimmedLine.substring(5)}
          </h4>
        );
      }
      // Lists
      else if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        elements.push(
          <li key={`li-${key++}`} className="ml-6 mb-2 text-muted-foreground">
            {trimmedLine.substring(2)}
          </li>
        );
      }
      // Bold text (simple implementation)
      else if (trimmedLine.includes('**')) {
        const parts = trimmedLine.split('**');
        elements.push(
          <p key={`p-${key++}`} className="mb-4 text-muted-foreground leading-relaxed">
            {parts.map((part, i) => 
              i % 2 === 0 ? part : <strong key={i} className="font-bold text-foreground">{part}</strong>
            )}
          </p>
        );
      }
      // Regular paragraphs
      else {
        elements.push(
          <p key={`p-${key++}`} className="mb-4 text-muted-foreground leading-relaxed">
            {trimmedLine}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link to="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <Card className="p-8 mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </Card>

        {/* Article Content */}
        <Card className="p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>
        </Card>

        <Separator className="my-12" />

        {/* Call to Action */}
        <Card className="p-8 bg-primary text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-4">Need Expert Help?</h3>
          <p className="text-lg mb-6 opacity-90">
            Get in touch with Panda Tech for professional {post.category.toLowerCase()} services
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Contact Us Today
            </Button>
          </Link>
        </Card>
      </article>
    </div>
  );
};

export default BlogPost;
