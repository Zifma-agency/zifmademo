import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Clock } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    { icon: Clock, text: "Slow loading times" },
    { icon: AlertCircle, text: "Outdated design" },
    { icon: TrendingDown, text: "Lost customers" }
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
            Your business might be amazing. But if your website looks{" "}
            <span className="text-primary relative inline-block">
              outdated
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
            {" "}or loads slow, people click away.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-3 p-6 bg-background rounded-lg shadow-sm"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <problem.icon className="w-12 h-12 text-primary" />
              <span className="text-sm font-medium text-foreground">{problem.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-primary font-semibold"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          You're losing customers before they even call.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
