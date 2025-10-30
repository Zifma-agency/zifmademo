import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const OfferSection = () => {
  const aiFeatures = [
    "Live site in 48 hrs",
    "1-year hosting included",
    "Domain setup done for you",
    "Basic SEO + contact form",
    "Pay only after site is live"
  ];

  const proFeatures = [
    "Premium template from Envato",
    "Advanced SEO setup",
    "Custom forms + analytics",
    "Delivery in 10–15 days"
  ];

  return (
    <section id="offer" className="py-16 px-4 md:py-24 bg-muted">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-foreground">
          Choose Your Perfect Plan
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 text-lg">
          Professional websites that drive results
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* AI Website Starter */}
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
            <CardHeader className="pb-4">
              <div className="text-4xl mb-2">🚀</div>
              <CardTitle className="text-2xl md:text-3xl">AI Website Starter</CardTitle>
              <CardDescription className="text-lg">Perfect for getting started fast</CardDescription>
              <div className="pt-4">
                <span className="text-4xl md:text-5xl font-bold text-primary">₹6,000</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
              <Button className="w-full mt-6" size="lg">
                Get Started Now
              </Button>
            </CardContent>
          </Card>

          {/* Pro Custom WordPress */}
          <Card className="border-2 border-primary hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <CardHeader className="pb-4">
              <div className="text-4xl mb-2">💎</div>
              <CardTitle className="text-2xl md:text-3xl">Pro Custom WordPress</CardTitle>
              <CardDescription className="text-lg">For businesses that need more</CardDescription>
              <div className="pt-4">
                <span className="text-4xl md:text-5xl font-bold text-primary">₹12,000–₹16,000</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {proFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
              <Button className="w-full mt-6" size="lg">
                Get Pro Version
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
