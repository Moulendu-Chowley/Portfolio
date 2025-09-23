"use client";
import { Button } from "@/components/shared/Button";
import { faqTabs } from "@/data/faqs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PageBreak } from "../../../../components/ui/PageBreak";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="flex flex-col items-center w-full relative mb-24 px-6 sm:px-8"
    >
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
      <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-8 md:mb-10 mt-8 w-full max-w-2xl flex-wrap">
        {faqTabs.map((tab, idx) => (
          <Button
            key={tab.label}
            onClick={() => {
              setActiveTab(idx);
              setOpenItemIndex(null); // Close any open item when switching tabs
            }}
            className={`px-2 md:px-6 py-2 md:py-3 text-[12px] md:text-lg transition-all duration-200 focus:outline-none whitespace-nowrap ${
              activeTab === idx
                ? "bg-[#1c1140] text-white border-[#bcb9d1] shadow-[0_0_0_2px_#4F46E5]"
                : "bg-[#1c1140]/40 text-[#bcb9d1] border-[#4F46E5]/40"
            }`}
            style={{ minWidth: 0, maxWidth: "100%" }}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      {/* FAQ List */}
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-2 sm:gap-3 md:gap-4">
        {faqTabs[activeTab].items.map((item, index) => (
          <div
            key={item.question}
            className="w-full rounded-2xl bg-[linear-gradient(60deg,#090831,#040022)] outline-1 outline-[#4F46E5]/20 border border-[#4F46E5]/10 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#4F46E5]/30"
          >
            {/* Question Header - Clickable */}
            <div
              className="w-full px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-between text-left cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <span className="text-white text-sm sm:text-base md:text-lg font-normal">
                {item.question}
              </span>
              {/* Plus/Minus indicator that rotates */}
              <motion.div
                animate={{ rotate: openItemIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="ml-2 sm:ml-4 text-[#A5B4FC] text-2xl font-medium flex items-center justify-center"
              >
                +
              </motion.div>
            </div>

            {/* Answer - Expandable */}
            <AnimatePresence>
              {openItemIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-2 sm:px-4 md:px-6 py-0 pb-4 sm:pb-5 md:pb-6 text-[#bcb9d1] text-sm sm:text-base border-t border-[#4F46E5]/10 mt-1">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
