import { AboutMeSection } from "./sections/AboutMeSection/AboutMeSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import FAQSection from './sections/FAQSection/FAQSection';
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import PraiseSection from './sections/PraiseSection/PraiseSection';
import { WorksSection } from "./sections/WorksSection";

export const LandingPage = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-center bg-[#0b011d] overflow-hidden w-full">
      <HeroSection />
      <AboutMeSection />
      <BenefitsSection />
      <WorksSection />
      <PraiseSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};
