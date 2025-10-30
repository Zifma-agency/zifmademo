import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do I need to pay upfront?",
      answer: "No, payment only after your site is live."
    },
    {
      question: "Do I need to buy hosting?",
      answer: "No, it's included in your plan."
    },
    {
      question: "What if I want updates later?",
      answer: "I offer simple maintenance at ₹500–₹1,000/mo."
    }
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-background">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 text-lg">
          Everything you need to know
        </p>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-muted rounded-lg px-6 border-none"
            >
              <AccordionTrigger className="text-left text-lg md:text-xl font-semibold hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
