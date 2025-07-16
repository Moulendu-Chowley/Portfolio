'use client';
import { Button } from "@/components/shared/Button";
import { faqTabs } from "@/data/faqs";
import { useState } from "react";
import { PageBreak } from "../../../../components/ui/PageBreak";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="faq" className="flex flex-col items-center w-full relative bg-[#0b011d] mb-24 px-6 sm:px-8">
      <PageBreak />
      <h2 className="w-full font-['Inter',Helvetica] font-semibold text-white text-[48px] sm:text-[48px] md:text-[64px] text-center tracking-[0.50px] leading-[28px] sm:leading-[40px] md:leading-[76.8px] mb-2 md:mb-4 md:-mt-16 relative z-10">
        FAQs
      </h2>
      <div className="w-full max-w-2xl mx-auto text-center mb-4 sm:mb-6 md:mb-10">
        <p className="text-[#bcb9d1] text-lg md:text-2xl font-normal leading-relaxed">
          Things I often get asked.
        </p>
      </div>
      {/* Tabs */}
      <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-8 md:mb-10 mt-8 w-full max-w-2xl">
        {faqTabs.map((tab, idx) => (
          <Button
            key={tab.label}
            onClick={() => setActiveTab(idx)}
            className={`px-2 md:px-6 py-2 md:py-3 text-[12px] md:text-lg transition-all duration-200 focus:outline-none whitespace-nowrap ${
              activeTab === idx
                ? "bg-[#1c1140] text-white border-[#bcb9d1] shadow-[0_0_0_2px_#916be7]"
                : "bg-[#1c1140]/40 text-[#bcb9d1] border-[#916be7]/40"
            }`}
            style={{ minWidth: 0, maxWidth: '100%' }}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      {/* FAQ List */}
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-2 sm:gap-3 md:gap-4">
        {faqTabs[activeTab].questions.map((q, i) => (
          <div
            key={q}
            className="w-full px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-2xl bg-[linear-gradient(150deg,#100F2E_0%,#0F002A_100%)] outline outline-1 outline-[#6971a2]/40 flex items-center justify-between text-left transition-all duration-200 hover:scale-[1.01] hover:shadow-lg"
          >
            <span className="text-white text-sm sm:text-base md:text-lg font-normal">
              {q}
            </span>
            {/* Dot indicator for style, as in the image */}
            <span className="ml-2 sm:ml-4 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#bcb9d1]/30" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;