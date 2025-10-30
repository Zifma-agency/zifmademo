import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Rocket, Gem, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="offer" className="py-16 px-4 md:py-24 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Choose Your Perfect Plan
          </h2>
          <p className="text-muted-foreground mb-12 md:mb-16 text-lg">
            Professional websites that drive results
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* AI Website Starter */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl h-full group">
              <CardHeader className="pb-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Rocket className="w-12 h-12 text-primary mb-2" />
                </motion.div>
                <CardTitle className="text-2xl md:text-3xl">AI Website Starter</CardTitle>
                <CardDescription className="text-lg">Perfect for getting started fast</CardDescription>
                <div className="pt-4">
                  <motion.span
                    className="text-4xl md:text-5xl font-bold text-primary inline-block"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    ₹6,000
                  </motion.span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index + 0.2, type: "spring" }}
                    >
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    </motion.div>
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full mt-6 group" size="lg">
                    Get Started Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pro Custom WordPress */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-primary hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full group">
              <motion.div
                className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Most Popular
              </motion.div>
              <CardHeader className="pb-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Gem className="w-12 h-12 text-primary mb-2" />
                </motion.div>
                <CardTitle className="text-2xl md:text-3xl">Pro Custom WordPress</CardTitle>
                <CardDescription className="text-lg">For businesses that need more</CardDescription>
                <div className="pt-4">
                  <motion.span
                    className="text-4xl md:text-5xl font-bold text-primary inline-block"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    ₹12,000–₹16,000
                  </motion.span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {proFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index + 0.2, type: "spring" }}
                    >
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    </motion.div>
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full mt-6 group" size="lg">
                    Get Pro Version
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
