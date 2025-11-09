import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { use3DTilt } from "@/hooks/use3DTilt";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

const PortfolioCard = ({ image, title, category, description }: PortfolioCardProps) => {
  const { ref, handlers } = use3DTilt({ max: 10, scale: 1.03 });

  return (
    <Card 
      ref={ref}
      {...handlers}
      className="overflow-hidden shadow-card hover:shadow-hover hover:border-secondary/50 transition-shadow duration-300 group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-all duration-500"
        />
        <div className="absolute top-4 right-4" style={{ transform: 'translateZ(40px)' }}>
          <Badge className="bg-primary text-primary-foreground shadow-glow-red">{category}</Badge>
        </div>
      </div>
      <CardContent className="p-6" style={{ transform: 'translateZ(30px)' }}>
        <h3 className="font-semibold text-xl mb-2 text-secondary">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
