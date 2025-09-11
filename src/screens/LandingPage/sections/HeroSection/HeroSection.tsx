"use client";

import { Button } from "@/components/shared/Button";
import Navbar from "@/components/ui/resizable-navbar";
import dynamic from "next/dynamic";
import { DM_Serif_Text } from "next/font/google";
import Link from "next/link";
import { Spotlight } from "../../../../components/ui/Spotlight";
const TypewriterText = dynamic(
  () => import("../../../../components/animations/TypewriterText"),
  { ssr: false }
);

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
});

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:80px_80px] [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,0.2)_40%,transparent_70%)] [mask-repeat:no-repeat] [mask-size:100%_100%]" />
      {/*<img
        className="absolute inset-0 w-full h-[787px] object-cover z-0"
        alt="Grid pattern"
        src="/grid-pattern.svg"
      />*/}
      {/* Spotlights - arranged as in the image */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
        fillOpacity={0.2}
      />
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-full"
        fill="#4F46E5"
        fillOpacity={0.2}
      />
      <Spotlight
        className="left-80 top-28 h-[80vh] w-[50vw]"
        fill="blue"
        fillOpacity={0.2}
      />
      {/* Main content */}
      <div className="relative z-20">
        {/* Navigation Bar */}
        <Navbar />
        {/* Hero Content */}
        <div className="flex flex-col w-full flex-grow items-center justify-center gap-14 md:gap-[60px] min-h-screen mx-auto px-4 sm:px-8 md:px-8">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-[42px] w-full">
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#e4ecff] text-xs sm:text-base text-center uppercase tracking-[3px] leading-[14.4px] sm:leading-[19.2px] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
              FROM PIXELS TO PROTOTYPES
            </p>
            <h1 className="[font-family:'Inter',Helvetica] font-normal text-5xl sm:text-5xl md:text-7xl text-center tracking-[-1.2px] sm:tracking-[-2.59px] md:tracking-[-3.60px] leading-[44px] sm:leading-[52px] md:leading-[72px] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
              <span className="font-bold text-white">
                Crafting dreams, Shaping visions <br />
                Yours ideas, <br className="block sm:hidden" />
              </span>
              <span
                className={`${dmSerifText.className} italic text-[#A5B4FC]`}
              >
                My{" "}
              </span>
              <TypewriterText texts={["code", "design"]} period={3000} />
            </h1>
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#e4ecff] text-base sm:text-xl md:text-2xl text-center leading-tight sm:leading-[28.8px] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
              Hi! I&apos;m Moulendu Chowley, a Designer and Developer based in
              India.
            </p>
          </div>
          <div className="flex gap-4 md:gap-10 items-center opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
            <Link href="/works">
              <Button className="w-auto px-6 py-3 text-sm md:text-lg">
                See my work
              </Button>
            </Link>
            <Link href="/coming-soon">
              <Button className="w-auto px-6 py-3 text-sm md:text-lg">
                See my blogs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
