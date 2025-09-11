import Image from "next/image";
import { PageBreak } from "../../../../components/ui/PageBreak";

const PraiseSection = () => (
  <section
    id="praise"
    className="flex flex-col items-center w-full relative mb-24 px-6"
  >
    {/* Background gradient elements */}
    <div className="absolute left-1/4 top-1/3 w-72 h-72 bg-gradient-to-br from-indigo-600/20 to-blue-600/20 rounded-full blur-3xl z-0" />
    <div className="absolute right-1/4 bottom-1/3 w-64 h-64 bg-gradient-to-tl from-blue-500/15 to-indigo-500/15 rounded-full blur-3xl z-0" />
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
      <div className="w-full p-8 rounded-2xl bg-[linear-gradient(60deg,#090831,#040022)] outline-1 outline-[#6971a2]/40 shadow-lg flex flex-col items-center text-center relative">
        <p className="text-white text-lg md:text-xl font-normal mb-6">
          Henry&apos;s work is bloody incredible.
          <br />
          Please don&apos;t hire him..
          <br />
          <span className="text-[#bcb9d1]">
            (..so I can keep him all to myself.)
          </span>
        </p>
        <div className="flex items-center text-start mt-4">
          <Image
            src="/nikhil.png"
            alt="Ali Abdaal"
            className="w-12 h-12 rounded-full mr-4 border-2 border-[#4F46E5] object-cover"
            width={48}
            height={48}
          />
          <div>
            <div className="text-white font-semibold text-base">Ali Abdaal</div>
            <div className="text-[#bcb9d1] text-sm">
              YouTuber, Podcaster, Entrepreneur
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PraiseSection;
