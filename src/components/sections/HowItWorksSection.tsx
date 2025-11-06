import { motion } from "framer-motion";
import { Clock, MessageSquare, Cpu, Palette, Eye, Rocket, HeadphonesIcon } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      time: "Hour 0",
      title: "You Brief Us",
      description: "Tell us about your business, goals, and vision through our simple questionnaire. Takes 15 minutes.",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Cpu,
      time: "Hour 1-12",
      title: "AI Builds",
      description: "Our AI analyzes thousands of design patterns and generates your custom website foundation.",
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: Palette,
      time: "Hour 12-36",
      title: "Humans Perfect",
      description: "Our design experts review, refine, and customize every element to match your brand.",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Eye,
      time: "Hour 36-44",
      title: "Your Review",
      description: "We send you the site for feedback. Request changes, we implement immediately.",
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: Rocket,
      time: "Hour 44-48",
      title: "We Launch",
      description: "Final checks, optimization, and your site goes live. Welcome to the internet.",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: HeadphonesIcon,
      time: "Post-Launch",
      title: "Ongoing Support",
      description: "2 weeks of support included. We're here if you need anything.",
      color: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(var(--primary), 0.3)",
                "0 0 30px rgba(var(--primary), 0.5)",
                "0 0 20px rgba(var(--primary), 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Clock className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            From Briefing to Launch: 48 Hours
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience our streamlined process that transforms your vision into reality
          </p>
        </motion.div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line */}
            <motion.div
              className="absolute top-20 left-0 right-0 h-1 bg-muted"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              style={{ transformOrigin: "left" }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                  >
                    {/* Icon Circle */}
                    <motion.div
                      className="relative mx-auto w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center mb-6 z-10"
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(var(--primary), 0.3)",
                          "0 0 30px rgba(var(--primary), 0.6)",
                          "0 0 20px rgba(var(--primary), 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      className={`bg-gradient-to-br ${step.color} p-6 rounded-lg border border-border/50 backdrop-blur-sm`}
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="text-sm font-bold text-primary mb-2"
                        animate={{
                          textShadow: [
                            "0 0 10px rgba(var(--primary), 0.3)",
                            "0 0 20px rgba(var(--primary), 0.5)",
                            "0 0 10px rgba(var(--primary), 0.3)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {step.time}
                      </motion.div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="relative flex gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute left-8 top-16 bottom-0 w-1 bg-gradient-to-b from-primary to-accent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                    style={{ transformOrigin: "top" }}
                  />
                )}

                {/* Icon */}
                <motion.div
                  className="relative flex-shrink-0 w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10"
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(var(--primary), 0.3)",
                      "0 0 30px rgba(var(--primary), 0.6)",
                      "0 0 20px rgba(var(--primary), 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`flex-1 bg-gradient-to-br ${step.color} p-5 rounded-lg border border-border/50 backdrop-blur-sm`}
                  whileHover={{ 
                    x: 5,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                  }}
                >
                  <motion.div
                    className="text-sm font-bold text-primary mb-2"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(var(--primary), 0.3)",
                        "0 0 20px rgba(var(--primary), 0.5)",
                        "0 0 10px rgba(var(--primary), 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {step.time}
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-muted-foreground text-lg">
            Ready to start your 48-hour transformation?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
