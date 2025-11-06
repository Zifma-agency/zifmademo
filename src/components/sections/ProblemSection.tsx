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
  return <section className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
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