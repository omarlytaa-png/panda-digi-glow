import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

const PortfolioCard = ({ image, title, category, description }: PortfolioCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-hover transition-smooth group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary text-primary-foreground">{category}</Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
