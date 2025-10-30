import { motion } from "framer-motion";
import { Zap, Smartphone, TrendingUp, Sparkles } from "lucide-react";

const DreamOutcomeSection = () => {
  const benefits = [
    { icon: Sparkles, text: "Clean & Modern", color: "text-primary" },
    { icon: Zap, text: "Lightning Fast", color: "text-primary" },
    { icon: Smartphone, text: "Mobile Perfect", color: "text-primary" },
    { icon: TrendingUp, text: "Lead Generation", color: "text-primary" }
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-background relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, hsl(var(--primary)) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, hsl(var(--primary)) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, hsl(var(--primary)) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
            Imagine having a{" "}
            <motion.span
              className="inline-block text-primary"
              animate={{ rotate: [0, -2, 2, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              clean, modern site
            </motion.span>
            {" "}that loads fast, looks great on mobile, and brings in leads
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              <span className="text-sm font-medium text-foreground">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-primary font-bold flex items-center justify-center gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
        >
          <Zap className="w-6 h-6" />
          — all ready in 2 days.
        </motion.p>
      </div>
    </section>
  );
};

export default DreamOutcomeSection;
