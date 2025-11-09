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
      <CardHeader className="p-4" style={{ transform: 'translateZ(30px)' }}>
        <div 
          className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:shadow-glow-blue transition-all duration-300"
          style={{ transform: 'translateZ(20px)' }}
        >
          <Icon className="text-secondary group-hover:text-secondary-foreground" size={24} />
        </div>
        <CardTitle className="text-lg text-secondary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0" style={{ transform: 'translateZ(20px)' }}>
        <p className="text-muted-foreground text-sm mb-3">{description}</p>
        <ul className="space-y-1.5">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-secondary mr-2 text-xs">✓</span>
              <span className="text-xs text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
