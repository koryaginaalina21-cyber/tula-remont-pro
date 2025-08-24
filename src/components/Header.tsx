import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

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
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:+79111111111" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              +7 (911) 111-11-11
            </a>
            <div className="flex items-center space-x-2">
              <a href="#" className="w-8 h-8 bg-[#0088cc] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-.962 6.502-.378 1.734-.956 2.045-1.574 2.045-.44 0-.788-.447-.788-.447s-2.848-2.137-4.695-3.18c-.552-.312-.936-.671-.061-1.367C10.725 10.424 15.89 5.675 15.89 5.675c.528-.48.145-.749-.203-.466C14.557 6.334 9.928 9.728 9.928 9.728a.942.942 0 0 1-.809.021s-1.25-.399-2.832-.898c-1.582-.499-2.968-.818-2.968-.818-.626-.194-.687-.406-.061-.65C4.717 6.753 16.9 7.224 16.9 7.224z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#0077FF] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.568 8.16c-.169-.225-.48-.359-.816-.359-.185 0-.366.044-.536.124l-2.456 1.16c-.24.113-.4.352-.4.616v4.798c0 .264.16.503.4.616l2.456 1.16c.17.08.351.124.536.124.336 0 .647-.134.816-.359.169-.225.264-.515.264-.816V9.264c0-.301-.095-.591-.264-.816z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <Button variant="accent" className="hidden sm:flex">
            <Phone className="w-4 h-4 mr-2" />
            Заказать замер
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;