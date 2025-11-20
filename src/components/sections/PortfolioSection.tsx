import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import portfolioCliswift from "@/assets/portfolio-cliswift.png";
import portfolioPixelpop from "@/assets/portfolio-pixelpop.png";
import portfolioHopestreet from "@/assets/portfolio-hopestreet.png";

const PortfolioSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const portfolioItems = [
    {
      title: "Hope Street",
      url: "https://www.hopestreetinternationalmissions.org/",
      description: "Compassionate healthcare services for all",
      image: portfolioHopestreet,
      tags: ["Healthcare", "Non-Profit", "Medical"],
    },
    {
      title: "CliSwift",
      url: "https://www.cliswift.com",
      description: "Expert IT consulting and technology solutions platform",
      image: portfolioCliswift,
      tags: ["Consulting", "Business", "IT Solutions"],
    },
    {
      title: "Pixelpop Media House",
      url: "https://www.pixelpopmediahouse.com",
      description: "Creative agency for brand strategy and social storytelling",
      image: portfolioPixelpop,
      tags: ["Creative", "Branding", "Media"],
    },
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-background relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(var(--primary)) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Portfolio</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Featured{" "}
            <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real websites built for real businesses. See the quality and attention to detail we bring to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.15), transparent 70%)",
                  }}
                />

                {/* Image container with overlay */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                    animate={{
                      scale: hoveredIndex === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-90" />
                  
                  {/* Visit link icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                      rotate: hoveredIndex === index ? [0, 5, 0] : 0,
                    }}
                    transition={{ duration: 0.5, repeat: hoveredIndex === index ? Infinity : 0, repeatDelay: 0.5 }}
                  >
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </motion.div>

                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + tagIndex * 0.1 }}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/20 backdrop-blur-sm text-primary border border-primary/30"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl md:text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300"
                    animate={{
                      x: hoveredIndex === index ? 4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {item.description}
                  </p>

                  {/* Animated underline */}
                  <motion.div
                    className="h-0.5 bg-primary mt-4 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20"
                  style={{
                    background: "linear-gradient(135deg, transparent 50%, hsl(var(--primary) / 0.1) 50%)",
                  }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
