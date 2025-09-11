import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  quote?: React.ReactNode;
  authorName?: string;
  authorRole?: string;
  authorAvatar?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote = (
    <>
      <span className="font-bold text-white">Moulendu&apos;s</span>{" "}
      <span className="font-medium text-white">work is bloody </span>
      <span className="font-medium text-[#A5B4FC]">incredible.</span>
    </>
  ),
  authorName = "Nikhil Ali",
  authorRole = "Youtuber, Entrepreneur",
  authorAvatar = "/nikhil.png",
  className = "",
}) => {
  return (
    <div
      className={`relative flex flex-col h-auto w-full rounded-[20px] overflow-hidden outline-1 outline-[#6971a2]/40 border border-transparent bg-clip-padding bg-[linear-gradient(60deg,#090831,#040022)] ${className}`}
    >
      <div className="flex flex-col w-full h-full items-center justify-center gap-2.5 px-10 py-5 z-10">
        <p className="font-['Inter',Helvetica] text-[26px] text-center max-w-[260px] mx-auto">
          {quote}
        </p>
        <div className="flex items-center gap-4 mt-2">
          <Image
            src={authorAvatar}
            alt={authorName}
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
          <div className="flex flex-col items-start">
            <div className="font-['Inter',Helvetica] font-normal text-white text-sm">
              {authorName}
            </div>
            <div className="font-['Inter',Helvetica] font-normal text-[#ffffff66] text-xs">
              {authorRole}
            </div>
          </div>
        </div>
      </div>
      {/* Double quote icons */}
      <Image
        src="/quote1.svg"
        alt="Quote left"
        className="absolute w-10 h-10 top-2 left-2 opacity-30"
        width={40}
        height={40}
      />
      <Image
        src="/quote2.svg"
        alt="Quote right"
        className="absolute w-10 h-10 bottom-2 right-2 opacity-30"
        width={40}
        height={40}
      />
    </div>
  );
};

export default TestimonialCard;
