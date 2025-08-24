import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Star } from "lucide-react";

const Reviews = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мнения наших клиентов о качестве работ и сервисе
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="text-center p-12 bg-gradient-to-br from-card to-muted/30">
            <CardContent>
              <div className="mb-6">
                <div className="bg-muted/50 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                  <MessageSquare className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-muted-foreground mb-2">
                  Скоро здесь появятся отзывы клиентов
                </h3>
                <p className="text-muted-foreground mb-8">
                  Мы только начинаем свою работу и уже выполнили несколько проектов. 
                  Первые отзывы будут опубликованы в ближайшее время.
                </p>
                
                <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 text-warning fill-current" />
                  ))}
                </div>
                
                <Button variant="accent" size="lg">
                  Оставить отзыв
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reviews;