import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Percent, Phone, Mail, MessageSquare } from "lucide-react";

const LeadForm = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center py-12">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                Хотите ремонт без предоплаты и с гарантией 2 года?
              </CardTitle>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Оставьте заявку сейчас и получите скидку 10% + бесплатную уборку после ремонта
              </p>
              <div className="mt-6 flex justify-center">
                <div className="bg-accent text-accent-foreground px-6 py-3 rounded-full flex items-center font-bold text-lg">
                  <Percent className="w-5 h-5 mr-2" />
                  Скидка 10% до конца месяца!
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Ваше имя</label>
                    <div className="relative">
                      <Input 
                        placeholder="Введите ваше имя" 
                        className="h-12 pl-4"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Телефон</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input 
                        placeholder="+7 (999) 123-45-67" 
                        className="h-12 pl-10"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Комментарий (необязательно)</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-muted-foreground w-4 h-4" />
                    <Textarea 
                      placeholder="Расскажите о ваших пожеланиях к ремонту" 
                      className="min-h-[100px] pl-10 pt-3"
                    />
                  </div>
                </div>
                
                <Button size="lg" variant="accent" className="w-full text-lg py-6">
                  <Percent className="w-5 h-5 mr-2" />
                  Получить скидку 10%
                </Button>
                
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных. 
                  Мы свяжемся с вами в течение 15 минут.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;