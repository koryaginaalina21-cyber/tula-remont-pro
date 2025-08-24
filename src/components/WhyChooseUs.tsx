import { Card, CardContent } from "@/components/ui/card";
import { Percent, LockKeyhole, CreditCard, Shield } from "lucide-react";

const benefits = [
  {
    title: "Скидка 10%",
    description: "На все виды работ при заказе через сайт",
    icon: Percent,
    color: "text-accent"
  },
  {
    title: "Смета фиксируется",
    description: "Цена не изменится в процессе ремонта",
    icon: LockKeyhole,
    color: "text-trust"
  },
  {
    title: "Без предоплаты",
    description: "Оплата только после выполнения работ",
    icon: CreditCard,
    color: "text-warning"
  },
  {
    title: "Гарантия 2 года",
    description: "Бесплатное устранение дефектов",
    icon: Shield,
    color: "text-primary"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы гарантируем качество, надёжность и выгодные условия
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-8 pb-6">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-background p-4 rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                      <Icon className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;