import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Сколько длится ремонт?",
    answer: "Сроки зависят от объёма работ: косметический ремонт 1-2 недели, капитальный ремонт 1-2 месяца. Точные сроки указываем в договоре и всегда их соблюдаем."
  },
  {
    question: "Как работает гарантия?",
    answer: "Мы предоставляем 2 года гарантии на все виды работ. В течение этого времени бесплатно устраняем любые дефекты, возникшие по нашей вине. Гарантия прописывается в договоре."
  },
  {
    question: "Как проходит оплата?",
    answer: "Никаких предоплат! Оплата производится поэтапно после выполнения каждого вида работ. Окончательный расчёт — только после полной сдачи объекта и вашего одобрения."
  },
  {
    question: "Вы работаете только в Туле или и в области?",
    answer: "Мы работаем в Туле и Тульской области в радиусе 50 км от города. Выезд замерщика в пределах этой зоны — бесплатный. Для более дальних расстояний обсуждаем индивидуально."
  },
  {
    question: "Какие материалы вы используете?",
    answer: "Работаем только с проверенными поставщиками и качественными материалами. Можем предложить материалы разных ценовых категорий или работать с вашими материалами."
  },
  {
    question: "Убираете ли вы мусор после ремонта?",
    answer: "Да! Уборка входит в стоимость всех наших пакетов. После завершения работ мы полностью убираем строительный мусор и делаем финальную уборку помещения."
  }
];

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о нашей работе
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;