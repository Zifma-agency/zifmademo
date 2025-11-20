import { motion } from "framer-motion";
import { Shield, Heart, Zap, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: Zap,
      title: "7-Day Promise",
      description: "Your website will be delivered within 7–12 days as per your package guaranteed",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "No Hidden Costs",
      description: "Clear pricing. No hidden charges. Everything agreed upfront",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Shield className="w-16 h-16 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our Guarantee to You
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              className="bg-muted p-8 rounded-lg text-center relative group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              {/* Hover background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              
              <motion.div
                className="relative z-10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <guarantee.icon className={`w-12 h-12 ${guarantee.color} mx-auto mb-4`} />
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {guarantee.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "{guarantee.description}"
                </p>
              </motion.div>

              {/* Check mark animation */}
              <motion.div
                className="absolute top-4 right-4"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.4, type: "spring" }}
              >
                <CheckCircle className="w-6 h-6 text-primary" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
