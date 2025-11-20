import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, LampDesk , CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  const features = [
    { icon: LampDesk, text: "Modern, professional website design" },
    { icon: CheckCircle, text: "100% satisfaction guaranteed" },
    { icon: Rocket, text: "Launch ready" }
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, white 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, white 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, white 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, white 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, white 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Rocket className="w-16 h-16 mx-auto mb-4" />
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to launch your website?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Get your professional website live in just 7 days without agency pricing
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <feature.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="https://wa.me/917729876070?text=Hi%21%20I%E2%80%99m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 h-auto group shadow-2xl"
            >
              Start My Site Now
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.div>
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
