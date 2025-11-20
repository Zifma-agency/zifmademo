import { Button } from "@/components/ui/button";
import { CheckCircle2, Rocket, Gem, Star, Sparkles, X } from "lucide-react";
import { motion } from "framer-motion";
import * as PricingCard from "@/components/ui/pricing-card";
import { cn } from "@/lib/utils";

const OfferSection = () => {
  const starterFeatures = [
    "Up to 4 clinic-focused pages (Home, About, Services, Contact)",
    "Mobile-responsive design",
    "Basic on-page SEO",
    "WhatsApp & Contact Form integration",
    "Google Analytics setup",
    "SSL setup + basic security",
    "Basic speed optimization",
    "2 revisions",
    "Delivery in 5–7 days",
    "14 days of support after launch"
  ];

  const growthFeatures = [
    "Up to 6 pages (Add Testimonials / Gallery / FAQ / Service Details)",
    "Conversion-focused layout",
    "Advanced on-page SEO",
    "Appointment/booking integration (optional)",
    "Advanced speed optimization",
    "3 revisions",
    "Delivery in 5–9 days",
    "1 month of maintenance",
    "Everything in Starter"
  ];

  const premiumFeatures = [
    "Up to 10 pages (All services + detailed sub-pages + blog setup)",
    "Custom brand-focused layout for clinics",
    "Extended SEO structure + basic schema setup",
    "Lead-capture setup (forms, CTAs, landing sections)",
    "Google Search Console integration",
    "Speed + performance fine-tuning",
    "4 revisions",
    "Delivery in 7–12 days",
    "45 days of priority support & maintenance",
    "Everything in Growth"
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
          {/* Starter Clinic Website */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <PricingCard.Card className="max-w-sm">
              <PricingCard.Header>
                <PricingCard.Plan>
                  <PricingCard.PlanName>
                    <Rocket aria-hidden="true" />
                    <span>Starter Clinic Website</span>
                  </PricingCard.PlanName>
                  <PricingCard.Badge className="bg-blue-500/10 text-blue-400 border-blue-400/30">Starter</PricingCard.Badge>
                </PricingCard.Plan>
                <PricingCard.Price>
                  <PricingCard.MainPrice>$600</PricingCard.MainPrice>
                </PricingCard.Price>
                <PricingCard.Description className="mb-4">
                  Perfect for new or small clinics that need a simple, modern, trust-building online presence.
                </PricingCard.Description>
                <Button
                  asChild
                  className={cn(
                    'w-full font-semibold text-white pointer-events-auto relative z-50',
                    'bg-gradient-to-b from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-[0_10px_25px_rgba(59,130,246,0.3)]',
                  )}
                >
                  <a href="https://wa.me/917729876070?text=I%27m%20interested%20in%20the%20Starter%20Clinic%20Website%20plan" target="_blank" rel="noopener noreferrer" className="relative z-50" style={{ pointerEvents: 'auto' }}>
                    Get Started
                  </a>
                </Button>
              </PricingCard.Header>
              <PricingCard.Body>
                <PricingCard.List>
                  {starterFeatures.map((feature, idx) => (
                    <PricingCard.ListItem key={idx}>
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-green-500"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </PricingCard.ListItem>
                  ))}
                </PricingCard.List>
              </PricingCard.Body>
            </PricingCard.Card>
          </motion.div>

          {/* Growth Clinic Website */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PricingCard.Card className="max-w-sm border-primary/50 shadow-xl shadow-primary/20">
              <PricingCard.Header>
                <PricingCard.Plan>
                  <PricingCard.PlanName>
                    <Star aria-hidden="true" />
                    <span>Growth Clinic Website</span>
                  </PricingCard.PlanName>
                  <PricingCard.Badge className="bg-green-500/10 text-green-400 border-green-400/30">Popular</PricingCard.Badge>
                </PricingCard.Plan>
                <PricingCard.Price>
                  <PricingCard.MainPrice>$850</PricingCard.MainPrice>
                </PricingCard.Price>
                <PricingCard.Description className="mb-4">
                  Ideal for clinics wanting more credibility, stronger SEO, and better patient conversions.
                </PricingCard.Description>
                <Button
                  asChild
                  className={cn(
                    'w-full font-semibold text-white pointer-events-auto relative z-50',
                    'bg-gradient-to-b from-primary to-primary/90 shadow-[0_10px_25px_hsl(var(--primary)/0.3)]',
                  )}
                >
                  <a href="https://wa.me/917729876070?text=I%27m%20interested%20in%20the%20Growth%20Clinic%20Website%20plan" target="_blank" rel="noopener noreferrer" className="relative z-50" style={{ pointerEvents: 'auto' }}>
                    Get Started
                  </a>
                </Button>
              </PricingCard.Header>
              <PricingCard.Body>
                <PricingCard.List>
                  {growthFeatures.map((feature, idx) => (
                    <PricingCard.ListItem key={idx}>
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-green-500"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </PricingCard.ListItem>
                  ))}
                </PricingCard.List>
              </PricingCard.Body>
            </PricingCard.Card>
          </motion.div>

          {/* Premium Clinic Website */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <PricingCard.Card className="max-w-sm border-amber-500/50">
              <PricingCard.Header>
                <PricingCard.Plan>
                  <PricingCard.PlanName>
                    <Gem aria-hidden="true" />
                    <span>Premium Clinic Website</span>
                  </PricingCard.PlanName>
                  <PricingCard.Badge className="bg-amber-500/10 text-amber-400 border-amber-400/30">Premium</PricingCard.Badge>
                </PricingCard.Plan>
                <PricingCard.Price>
                  <PricingCard.MainPrice>$1,200</PricingCard.MainPrice>
                </PricingCard.Price>
                <PricingCard.Description className="mb-4">
                  Best for established clinics with multiple services, higher traffic, and branding needs.
                </PricingCard.Description>
                <Button
                  asChild
                  variant="outline"
                  className={cn(
                    'w-full font-semibold relative z-50 pointer-events-auto',
                    'border-amber-400/30 text-amber-400 hover:bg-amber-500/10',
                  )}
                >
                  <a href="https://wa.me/917729876070?text=I%27m%20interested%20in%20the%20Premium%20Clinic%20Website%20plan" target="_blank" rel="noopener noreferrer" className="relative z-50" style={{ pointerEvents: 'auto' }}>
                    Get Started
                  </a>
                </Button>
              </PricingCard.Header>
              <PricingCard.Body>
                <PricingCard.List>
                  {premiumFeatures.map((feature, idx) => (
                    <PricingCard.ListItem key={idx}>
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-green-500"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
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
