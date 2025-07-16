import { PageBreak } from "../../../../components/ui/PageBreak";

const PraiseSection = () => (
  <section id="praise" className="flex flex-col items-center w-full relative bg-[#0b011d] mb-24 px-6">
    <PageBreak />
    <h2 className="w-full font-['Inter',Helvetica] font-semibold text-white text-[48px] md:text-[64px] text-center tracking-[0.50px] leading-[76.8px] mb-2 md:mb-4 md:-mt-16 relative z-10">
      Praise.
    </h2>
    <div className="w-full max-w-2xl mx-auto text-center mb-12">
      <p className="text-[#bcb9d1] text-lg md:text-2xl font-normal leading-relaxed">
        Some nice words from nice people.
      </p>
    </div>
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
      <div className="w-full p-8 rounded-2xl bg-[linear-gradient(150deg,#100F2E_0%,#0F002A_100%)] outline outline-1 outline-[#6971a2]/40 shadow-lg flex flex-col items-center text-center relative">
        <p className="text-white text-lg md:text-xl font-normal mb-6">
          Henry's work is bloody incredible.<br />
          Please don't hire him..<br />
          <span className="text-[#bcb9d1]">(..so I can keep him all to myself.)</span>
        </p>
        <div className="flex items-center text-start mt-4">
          <img src="/Profile.png" alt="Ali Abdaal" className="w-12 h-12 rounded-full mr-4 border-2 border-[#916be7] object-cover" />
          <div>
            <div className="text-white font-semibold text-base">Ali Abdaal</div>
            <div className="text-[#bcb9d1] text-sm">YouTuber, Podcaster, Entrepreneur</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PraiseSection;