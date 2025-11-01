import { Button } from "@/components/ui/button";
import { CheckCircle2, Rocket, Gem, Star } from "lucide-react";
import { motion } from "framer-motion";
import * as PricingCard from "@/components/ui/pricing-card";
import { cn } from "@/lib/utils";

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
    <section id="offer" className="py-16 px-4 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle dotted grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.08) 0.8px, transparent 0.8px)',
          backgroundSize: '14px 14px',
          maskImage:
            'radial-gradient( circle at 50% 10%, rgba(0,0,0,1), rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70% )',
        }}
      />

      {/* Radial spotlight */}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
          'opacity-20 blur-[80px]'
        )}
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.3), transparent 50%)'
        }}
      />

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Choose Your Perfect Plan
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional websites that drive results
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {/* AI Website Starter */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <PricingCard.Card className="max-w-sm">
              <PricingCard.Header>
                <PricingCard.Plan>
                  <PricingCard.PlanName>
                    <Rocket aria-hidden="true" />
                    <span>AI Website Starter</span>
                  </PricingCard.PlanName>
                  <PricingCard.Badge>Fast Start</PricingCard.Badge>
                </PricingCard.Plan>
                <PricingCard.Price>
                  <PricingCard.MainPrice>₹6,000</PricingCard.MainPrice>
                  <PricingCard.Period>one-time</PricingCard.Period>
                </PricingCard.Price>
                <Button
                  className={cn(
                    'w-full font-semibold text-white',
                    'bg-gradient-to-b from-primary to-primary/90 shadow-[0_10px_25px_hsl(var(--primary)/0.3)]',
                  )}
                >
                  Get Started Now
                </Button>
              </PricingCard.Header>
              <PricingCard.Body>
                <PricingCard.List>
                  {aiFeatures.map((item, idx) => (
                    <PricingCard.ListItem key={idx}>
                      <span className="mt-0.5">
                        <CheckCircle2
                          className="h-4 w-4 text-green-500"
                          aria-hidden="true"
                        />
                      </span>
                      <span>{item}</span>
                    </PricingCard.ListItem>
                  ))}
                </PricingCard.List>
              </PricingCard.Body>
            </PricingCard.Card>
          </motion.div>

          {/* Pro Custom WordPress */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <PricingCard.Card className="max-w-sm border-primary/50">
              <PricingCard.Header>
                <PricingCard.Plan>
                  <PricingCard.PlanName>
                    <Gem aria-hidden="true" />
                    <span>Pro WordPress</span>
                  </PricingCard.PlanName>
                  <PricingCard.Badge className="bg-primary/20 border-primary text-primary">
                    <Star className="w-3 h-3 inline mr-1" />
                    Popular
                  </PricingCard.Badge>
                </PricingCard.Plan>
                <PricingCard.Price>
                  <PricingCard.MainPrice>₹12k–16k</PricingCard.MainPrice>
                  <PricingCard.Period>one-time</PricingCard.Period>
                </PricingCard.Price>
                <Button
                  className={cn(
                    'w-full font-semibold text-white',
                    'bg-gradient-to-b from-primary to-primary/90 shadow-[0_10px_25px_hsl(var(--primary)/0.3)]',
                  )}
                >
                  Get Pro Version
                </Button>
              </PricingCard.Header>
              <PricingCard.Body>
                <PricingCard.List>
                  {proFeatures.map((item, idx) => (
                    <PricingCard.ListItem key={idx}>
                      <span className="mt-0.5">
                        <CheckCircle2
                          className="h-4 w-4 text-green-500"
                          aria-hidden="true"
                        />
                      </span>
                      <span>{item}</span>
                    </PricingCard.ListItem>
                  ))}
                </PricingCard.List>
              </PricingCard.Body>
            </PricingCard.Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
