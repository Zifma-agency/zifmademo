import { Button } from "@/components/ui/button";
import { CheckCircle2, Rocket, Gem, Star, Sparkles, X } from "lucide-react";
import { motion } from "framer-motion";
import * as PricingCard from "@/components/ui/pricing-card";
import { cn } from "@/lib/utils";

const OfferSection = () => {
  const aiFeatures = [
    { text: "Live site in 48 hrs", included: true },
    { text: "1-year hosting included", included: true },
    { text: "Domain setup done for you", included: true },
    { text: "Basic SEO + contact form", included: true },
    { text: "Pay only after site is live", included: true },
    { text: "Not for ecommerce", included: false }
  ];

  const proFeatures = [
    "Premium Design",
    "Domain and hosting included for 1yr",
    "Custom forms + analytics",
    "Delivery in 5–7 days"
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
        {/* Marquee Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 backdrop-blur-sm px-3 md:px-0">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer" />
            
            {/* Marquee content */}
            <div className="relative py-4 md:py-4 overflow-hidden">
              <div className="flex items-center gap-3 md:gap-6">
                {/* Sparkle icon - left */}
                <Sparkles className="w-5 h-5 md:w-5 md:h-5 text-primary animate-pulse flex-shrink-0 z-10" />
                
                {/* Scrolling text container */}
                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
                    <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                      <span className="text-primary font-bold">AI Starter Plan</span> is on <span className="text-primary font-bold">Launch Discount</span> for this month until <span className="text-primary font-bold">Dec 7 only!</span> Hurry up! 🚀
                    </span>
                    <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                      <span className="text-primary font-bold">AI Starter Plan</span> is on <span className="text-primary font-bold">Launch Discount</span> for this month until <span className="text-primary font-bold">Dec 7 only!</span> Hurry up! 🚀
                    </span>
                    <span className="text-sm sm:text-base md:text-base font-semibold text-foreground">
                      <span className="text-primary font-bold">AI Starter Plan</span> is on <span className="text-primary font-bold">Launch Discount</span> for this month until <span className="text-primary font-bold">Dec 7 only!</span> Hurry up! 🚀
                    </span>
                  </div>
                </div>
                
                {/* Sparkle icon - right */}
                <Sparkles className="w-5 h-5 md:w-5 md:h-5 text-primary animate-pulse flex-shrink-0 z-10" />
              </div>
            </div>
          </div>
        </motion.div>

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
                <div className="mb-3">
                  <div className="text-3xl font-extrabold tracking-tight mb-1">Get Quote</div>
                  <p className="text-xs text-muted-foreground italic">costs less than your netflix subscription</p>
                </div>
                <Button
                  asChild
                  className={cn(
                    'w-full font-semibold text-white pointer-events-auto relative z-50',
                    'bg-gradient-to-b from-primary to-primary/90 shadow-[0_10px_25px_hsl(var(--primary)/0.3)]',
                  )}
                >
                  <a href="https://wa.me/917729876070?text=Let%E2%80%99s%20get%20my%20website%20in%2048%20hours%21" target="_blank" rel="noopener noreferrer" className="relative z-50" style={{ pointerEvents: 'auto' }}>
                    Get Started Now
                  </a>
                </Button>
              </PricingCard.Header>
              <PricingCard.Body>
                <PricingCard.List>
                  {aiFeatures.map((feature, idx) => (
                    <PricingCard.ListItem key={idx}>
                      <span className="mt-0.5">
                        {feature.included ? (
                          <CheckCircle2
                            className="h-4 w-4 text-green-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <X
                            className="h-4 w-4 text-red-500"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                      <span className={!feature.included ? "text-muted-foreground" : ""}>{feature.text}</span>
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
                  <PricingCard.MainPrice>Starting at ₹12,000</PricingCard.MainPrice>
                  <PricingCard.Period>one-time</PricingCard.Period>
                </PricingCard.Price>
                <Button
                  asChild
                  className={cn(
                    'w-full font-semibold text-white pointer-events-auto relative z-50',
                    'bg-gradient-to-b from-primary to-primary/90 shadow-[0_10px_25px_hsl(var(--primary)/0.3)]',
                  )}
                >
                  <a href="https://wa.me/917729876070?text=Let%E2%80%99s%20get%20my%20pro%20website%20built%21" target="_blank" rel="noopener noreferrer" className="relative z-50" style={{ pointerEvents: 'auto' }}>
                    Get Pro Version
                  </a>
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
