import dynamic from "next/dynamic";

const AboutMeSection = dynamic(() =>
  import("./sections/AboutMeSection/AboutMeSection").then(
    (mod) => mod.AboutMeSection
  )
);
const BenefitsSection = dynamic(() =>
  import("./sections/BenefitsSection").then((mod) => mod.BenefitsSection)
);
const FAQSection = dynamic(() => import("./sections/FAQSection/FAQSection"));
const FooterSection = dynamic(() =>
  import("./sections/FooterSection").then((mod) => mod.FooterSection)
);
const HeroSection = dynamic(() =>
  import("./sections/HeroSection").then((mod) => mod.HeroSection)
);
const PraiseSection = dynamic(
  () => import("./sections/PraiseSection/PraiseSection")
);
const WorksSection = dynamic(() =>
  import("./sections/WorksSection").then((mod) => mod.WorksSection)
);

export const LandingPage = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-center bg-[#02001F] overflow-hidden w-full">
      <HeroSection />
      <WorksSection />
      <AboutMeSection />
      <BenefitsSection />
      <PraiseSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};
