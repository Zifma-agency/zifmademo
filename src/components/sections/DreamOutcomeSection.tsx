import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap, Smartphone, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const DreamOutcomeSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Clean & Modern Design",
      content: "A beautiful, professional website that makes a great first impression",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop"
    },
    {
      icon: Zap,
      title: "Lightning Fast Loading",
      content: "Optimized performance that keeps visitors engaged and interested",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      icon: Smartphone,
      title: "Mobile Perfect",
      content: "Looks stunning on every device - phone, tablet, or desktop",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: TrendingUp,
      title: "Lead Generation Ready",
      content: "Built to convert visitors into customers with strategic CTAs",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const autoPlayInterval = 2500;

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length]);

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
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            Imagine having a{" "}
            <motion.span
              className="inline-block text-primary"
              animate={{ rotate: [0, -2, 2, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              clean, modern site
            </motion.span>
          </h2>
          <p className="text-xl md:text-2xl text-primary font-bold">
            that loads fast, looks great on mobile, and brings in leads — all ready in 2 days
          </p>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Steps Section */}
          <div className="order-2 md:order-1 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 cursor-pointer"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setCurrentFeature(index);
                  setProgress(0);
                }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative",
                    index === currentFeature
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                  animate={{ scale: index === currentFeature ? 1.1 : 1 }}
                >
                  {index <= currentFeature ? (
                    <feature.icon className="w-6 h-6" />
                  ) : (
                    <span className="text-lg font-bold">{index + 1}</span>
                  )}
                  
                  {/* Progress ring */}
                  {index === currentFeature && (
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray={`${2 * Math.PI * 22}`}
                        strokeDashoffset={`${2 * Math.PI * 22 * (1 - progress / 100)}`}
                        className="text-primary-foreground opacity-50"
                      />
                    </svg>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Section */}
          <div className="order-1 md:order-2 relative h-[300px] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-2xl overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -10 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 10 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      
                      {/* Floating icon */}
                      <motion.div
                        className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <feature.icon className="w-8 h-8 text-primary-foreground" />
                      </motion.div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamOutcomeSection;
