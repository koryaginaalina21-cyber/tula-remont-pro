import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Базовый",
    price: "от 250 ₽/м²",
    description: "Косметический ремонт",
    features: [
      "Поклейка обоев",
      "Покраска стен и потолка",
      "Установка плинтусов",
      "Укладка ламината",
      "Базовая сантехника"
    ],
    isPopular: false
  },
  {
    name: "Стандарт",
    price: "от 500 ₽/м²",
    description: "Капитальный ремонт",
    features: [
      "Демонтаж и подготовка",
      "Электрика и сантехника",
      "Выравнивание стен",
      "Качественные материалы",
      "Установка дверей и окон",
      "Дизайн-проект"
    ],
    isPopular: true
  },
  {
    name: "Премиум",
    price: "Индивидуально",
    description: "Элитный ремонт",
    features: [
      "Эксклюзивные материалы",
      "Авторский дизайн",
      "Умный дом",
      "Премиум сантехника",
      "VIP-сервис",
      "Персональный менеджер"
    ],
    isPopular: false
  }
];

const Pricing = () => {
  return (
    <section id="prices" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Цены и пакеты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий пакет услуг для вашего ремонта
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.isPopular ? 'ring-2 ring-accent shadow-lg scale-105' : ''}`}>
              {plan.isPopular && (
                <Badge variant="accent" className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1">
                  <Star className="w-4 h-4 mr-1" />
                  Популярный
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-trust mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.isPopular ? "accent" : "outline"}
                >
                  Узнать подробности
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;