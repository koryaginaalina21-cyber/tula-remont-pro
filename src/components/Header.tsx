import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold text-primary">РемонтТула</div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#prices" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Цены
            </a>
            <a href="#portfolio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Портфолио
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#contacts" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
        </div>
        
        <Button variant="accent" className="hidden sm:flex">
          <Phone className="w-4 h-4 mr-2" />
          Заказать замер
        </Button>
      </div>
    </header>
  );
};

export default Header;