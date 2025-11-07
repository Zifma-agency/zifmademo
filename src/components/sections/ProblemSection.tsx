import { motion } from "framer-motion";
import { StickyFeatureSection } from "@/components/ui/sticky-scroll-cards-section";
const ProblemSection = () => {
  const problems = [{
    title: "Slow Loading Times",
    description: "Your website takes forever to load, frustrating visitors who expect instant results. Every second of delay costs you potential customers.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    bgColor: "#57100f",
    textColor: "text-white"
  }, {
    title: "Outdated Design",
    description: "An old-fashioned website makes your business look unprofessional and behind the times, driving away modern customers.",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
    bgColor: "#ad211f",
    textColor: "text-white"
  }, {
    title: "Lost Customers",
    description: "Poor user experience and confusing navigation mean visitors leave before taking action, costing you valuable leads and sales.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    bgColor: "#e05452",
    textColor: "text-white"
  }];
  return <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20 pointer-events-none" />
      
      <motion.div className="text-center py-8" initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.6
    }}>
        <h2 className="text-3xl md:text-5xl font-bold px-4 text-foreground leading-tight">
          Your business might be amazing. But if your website has
        </h2>
      </motion.div>

      <StickyFeatureSection title="" subtitle="" features={problems} />

      
    </section>;
};
export default ProblemSection;