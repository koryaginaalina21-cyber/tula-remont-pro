import { Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacts" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4">РемонтТула</h3>
            <p className="text-primary-foreground/80">
              Качественный ремонт без предоплаты с гарантией 2 года
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-accent" />
              <a href="tel:+79111111111" className="hover:text-accent transition-colors">
                8 911 111-11-11
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-accent" />
              <a href="mailto:pochta@pochta.ru" className="hover:text-accent transition-colors">
                pochta@pochta.ru
              </a>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Работаем в Туле и области (выезд до 50 км)
            </p>
          </div>
          
          <div className="flex space-x-4 md:justify-end">
            <a 
              href="#" 
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-colors"
              aria-label="VK"
            >
              <div className="w-6 h-6 bg-current mask-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMi44IDE4LjdoMS40cy40Mi0uMDUuNjQtLjNjLjItLjIzLjE5LS42Ni4xOS0uNjZzLS4wMy0yLjA0IDEuOTItMi4zNGMxLjk1LS4zIDQuNDUgMS45NyA3LjEgMi44NCAyLjAxLjY2IDMuNTMuNTEgMy41My41MWwuMDEtLjAxczMuNjMtLjIzIDEuOS00LjY0Yy0uMTItLjMxLS44OC0xLjg3LTQuNTQtNS4yOEMxOS42OCA0Ljg1IDE0IDMgMTIgM2MtMiAwLTcuNjggMS44NS0xMC4yOSA0LjhDLjMyIDkuNS0uNTYgMTEuMy0uNDQgMTEuNjFjMS43MyA0LjQxIDEuOSA0LjY0IDEuOSA0LjY0bC4wMS4wMXMxLjUyLS4xNSAzLjUzLS41MWMyLjY1LS44NyA1LjE1LTMuMTQgNy4xLTIuODQgMS45NS4zIDEuOTIgMi4zNCAxLjkyIDIuMzRzLS4wMS40My4xOS42NmMuMjIuMjUuNjQuMyAuNjQuM3oiLz48L3N2Zz4=')] mask-size:cover"></div>
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; 2024 РемонтТула. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;