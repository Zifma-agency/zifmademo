import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 px-4 md:py-24 bg-primary text-primary-foreground">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to launch your website?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Get your professional website live in just 48 hours
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          className="text-lg px-8 py-6 h-auto"
        >
          Start My Site Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
