import { Button, SocialIconButton } from "@/components/shared/Button";
import Image from "next/image";
import Link from 'next/link';

export const FooterSection = ()=> {
  // Social media icons data for mapping
  const socialIcons = [
    {
      name: "Instagram",
      imgSrc: "/instagram.svg",
    },
    {
      name: "LinkedIn",
      imgSrc: "/Linkedin.svg",
    },
    {
      name: "GitHub",
      imgSrc: "/github.svg",
    },
    {
      name: "Dribble",
      imgSrc: "/Dribble.svg",
    },
  ];

  return (
    <footer className="w-full relative overflow-hidden px-4 md:px-64">
      {/* Grid background same as HeroSection */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,0.2)_40%,transparent_70%)] [mask-repeat:no-repeat] [mask-size:100%_100%] z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-[90px] mt-14 md:mt-26 mb-14 md:mb-26 px-4">
        <div className="flex flex-col w-full max-w-[720px] items-center justify-center gap-6 md:gap-10">
          <h2 className="font-bold text-4xl md:text-5xl text-center tracking-[-2.00px] leading-[48px]">
            <span className="text-white tracking-[-0.96px]">
              Ready to take{" "}
            </span>
            <span className="text-[#cbacf9] tracking-[-0.96px]">your</span>
            <span className="text-white tracking-[-0.96px]">
              {" "}
              digital presence to the next level?
            </span>
          </h2>
          <p className="text-[#c1c2d3] text-base text-center tracking-[-0.16px] leading-[22.4px]">
            Reach out to me today and let's discuss how I can help you achieve
            your goals.
          </p>
          <Link href="/contact">
            <Button className="px-6 py-3 text-sm md:text-lg">
              Contact Me Now
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-between w-full mt-10">
          <div className="text-white text-[10px] md:text-sm leading-6">
            Copyright ©2025 Moueldnu chowley
          </div>
          <div className="flex items-center gap-4">
            {socialIcons.map((social, index) => (
              <SocialIconButton
                key={index}
                icon={
                  social.imgSrc ? (
                    <Image
                      src={social.imgSrc}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="w-3 h-3 md:w-6 md:h-6"
                    />
                  ) : null
                }
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
