import { Shield, Heart } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 px-4 md:py-24 bg-background">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-foreground">
          Our Promise to You
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-muted rounded-lg p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
              48-Hour Guarantee
            </h3>
            <p className="text-lg text-muted-foreground">
              "If your website isn't live within 48 hours, you don't pay."
            </p>
          </div>

          <div className="bg-muted rounded-lg p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
              Love It Guarantee
            </h3>
            <p className="text-lg text-muted-foreground">
              "If you don't love it, I'll fix it free."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
