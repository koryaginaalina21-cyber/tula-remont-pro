import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, DollarSign, Users } from "lucide-react";
import heroImage from "@/assets/hero-renovation.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-primary-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Ремонт под ключ в Туле — без предоплаты, гарантия 2 года
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Оставьте заявку — скидка 10% + бесплатная уборка
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" variant="accent" className="text-lg px-8 py-6">
              Оставить заявку
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Рассчитать стоимость
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Badge variant="trust" className="px-4 py-2 text-sm">
              <DollarSign className="w-4 h-4 mr-2" />
              250 ₽/м²
            </Badge>
            <Badge variant="trust" className="px-4 py-2 text-sm">
              <Users className="w-4 h-4 mr-2" />
              Без предоплаты
            </Badge>
            <Badge variant="trust" className="px-4 py-2 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Гарантия 2 года
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;