import { Card, CardContent } from "@/components/ui/card";
import { FileText, Ruler, FileSignature, Hammer, Key, Shield } from "lucide-react";

const processSteps = [
  {
    step: 1,
    title: "Заявка",
    description: "Оставляете заявку на сайте или звоните нам",
    icon: FileText
  },
  {
    step: 2,
    title: "Замер и смета",
    description: "Выезжаем на объект, делаем замеры и составляем смету",
    icon: Ruler
  },
  {
    step: 3,
    title: "Договор",
    description: "Подписываем договор с фиксированной стоимостью",
    icon: FileSignature
  },
  {
    step: 4,
    title: "Ремонт",
    description: "Выполняем все работы качественно и в срок",
    icon: Hammer
  },
  {
    step: 5,
    title: "Сдача",
    description: "Принимаете готовый объект и получаете ключи",
    icon: Key
  },
  {
    step: 6,
    title: "Гарантия 2 года",
    description: "Предоставляем расширенную гарантию на все работы",
    icon: Shield
  }
];

const WorkProcess = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Процесс работы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простая и понятная схема работы от заявки до сдачи объекта
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  
                  <div className="mb-4 flex justify-center">
                    <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  
                  <h3 className="font-semibold mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-muted-foreground">
                    →
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;