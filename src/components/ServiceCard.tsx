import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { use3DTilt } from "@/hooks/use3DTilt";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  const { ref, handlers } = use3DTilt({ max: 12, scale: 1.04 });

  return (
    <Card 
      ref={ref}
      {...handlers}
      className="shadow-card hover:shadow-hover hover:border-secondary/50 transition-shadow duration-300 group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <CardHeader style={{ transform: 'translateZ(30px)' }}>
        <div 
          className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:shadow-glow-blue transition-all duration-300"
          style={{ transform: 'translateZ(20px)' }}
        >
          <Icon className="text-secondary group-hover:text-secondary-foreground" size={28} />
        </div>
        <CardTitle className="text-xl text-secondary">{title}</CardTitle>
      </CardHeader>
      <CardContent style={{ transform: 'translateZ(20px)' }}>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-secondary mr-2 font-bold">✓</span>
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
