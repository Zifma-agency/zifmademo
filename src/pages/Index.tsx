import HeroWithLogos from "@/components/ui/hero-with-logos";
import ProblemSection from "@/components/sections/ProblemSection";
import DreamOutcomeSection from "@/components/sections/DreamOutcomeSection";
import OfferSection from "@/components/sections/OfferSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroWithLogos />
      <ProblemSection />
      <DreamOutcomeSection />
      <OfferSection />
      <GuaranteeSection />
      <SocialProofSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
