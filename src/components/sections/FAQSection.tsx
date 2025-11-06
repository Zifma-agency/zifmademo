import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do I need to pay upfront?",
      answer: "To get started, there’s just a small booking deposit — it covers your domain, hosting setup, and design slot.🔹 For the AI Website Package (₹6,000) — pay ₹2,000 upfront, and the rest after your site is live and approved.🔹 For the Custom WordPress Package (₹12,000–₹16,000) — pay 50% upfront to reserve your slot and template license, then the balance once the final site is delivered.This helps keep things fair — it protects both of us and locks in your build schedule so your project starts immediately.."
    },
    {
      question: "Do I need to buy hosting?",
      answer: "No, it's included in your plan."
    },
    {
      question: "Do I need to buy domain?",
      answer: "No, it's included in your plan."
    },
    {
      question: "What if I want updates later?",
      answer: "I offer simple maintenance at ₹500–₹1,000/mo."
    }
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <HelpCircle className="w-12 h-12 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mb-12 md:mb-16 text-lg">
            Everything you need to know
          </p>
        </motion.div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <AccordionItem 
                value={`item-${index}`}
                className="bg-muted rounded-lg px-6 border-none group hover:bg-muted/80 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold hover:no-underline py-5 group-hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
