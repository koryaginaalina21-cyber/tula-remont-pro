import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Home, DollarSign } from "lucide-react";
import bathroomImage from "@/assets/portfolio-bathroom.jpg";
import kitchenImage from "@/assets/portfolio-kitchen.jpg";
import bedroomImage from "@/assets/portfolio-bedroom.jpg";

const portfolioItems = [
  {
    image: bathroomImage,
    title: "Ванная комната",
    area: "8 м²",
    duration: "2 недели",
    cost: "80 000 ₽",
    type: "Капитальный ремонт"
  },
  {
    image: kitchenImage,
    title: "Кухня-гостиная",
    area: "25 м²",
    duration: "1 месяц",
    cost: "320 000 ₽",
    type: "Дизайнерский ремонт"
  },
  {
    image: bedroomImage,
    title: "Спальня",
    area: "18 м²",
    duration: "3 недели",
    cost: "150 000 ₽",
    type: "Современный стиль"
  },
  {
    image: bathroomImage,
    title: "Детская комната",
    area: "15 м²",
    duration: "2 недели",
    cost: "120 000 ₽",
    type: "Эко-стиль"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Портфолио</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Примеры наших работ — каждый проект выполнен с гарантией качества
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
                    {item.type}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4">{item.title}</h3>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Home className="w-4 h-4 mr-2 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">{item.area}</div>
                      <div>Площадь</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-accent" />
                    <div>
                      <div className="font-medium text-foreground">{item.duration}</div>
                      <div>Срок</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <DollarSign className="w-4 h-4 mr-2 text-trust" />
                    <div>
                      <div className="font-medium text-foreground">{item.cost}</div>
                      <div>Стоимость</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;