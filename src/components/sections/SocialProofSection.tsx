import { motion } from "framer-motion";
import { ArrowDown, Sparkles, TrendingUp, Star } from "lucide-react";

const SocialProofSection = () => {
  // Placeholder for demo sites - you can replace with actual screenshots later
  const demoSites = [
    { 
      before: "Before: Slow loading site",
      after: "After: Fast, modern design",
      category: "Restaurant Website",
      improvement: "+300% Speed"
    },
    { 
      before: "Before: Outdated layout",
      after: "After: Mobile-friendly design",
      category: "Service Business",
      improvement: "+250% Conversions"
    }
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            See the Transformation
          </h2>
          <p className="text-muted-foreground mb-12 md:mb-16 text-lg">
            Real results from our website builds
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {demoSites.map((demo, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-lg overflow-hidden shadow-lg group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <motion.span
                    className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {demo.category}
                  </motion.span>
                  <motion.div
                    className="flex items-center gap-1 text-primary"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-bold">{demo.improvement}</span>
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <motion.div
                    className="bg-muted/50 p-4 rounded-lg border border-muted-foreground/10"
                    whileHover={{ x: -5 }}
                  >
                    <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-muted-foreground/50 rounded-full" />
                      Before
                    </p>
                    <p className="font-medium text-foreground">{demo.before}</p>
                  </motion.div>

                  <div className="flex justify-center">
                    <motion.div
                      className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowDown className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>

                  <motion.div
                    className="bg-primary/5 p-4 rounded-lg border-2 border-primary/20 relative overflow-hidden"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                      <Star className="w-3 h-3 text-primary fill-primary" />
                      After
                    </p>
                    <p className="font-medium text-foreground">{demo.after}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
