import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ui/service-card";

const ProblemSection = () => {
  const problems = [
    {
      title: "Slow Loading Times",
      imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      imgAlt: "Clock illustration",
      variant: "purple" as const,
    },
    {
      title: "Outdated Design",
      imgSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
      imgAlt: "Design illustration",
      variant: "gray" as const,
    },
    {
      title: "Lost Customers",
      imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      imgAlt: "Customer loss illustration",
      variant: "default" as const,
    },
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0 
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              <ServiceCard
                title={problem.title}
                imgSrc={problem.imgSrc}
                imgAlt={problem.imgAlt}
                variant={problem.variant}
                className="min-h-[200px]"
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-xl md:text-2xl text-primary font-semibold text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          You're losing customers before they even call.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
