'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, CardButton } from "../../../../components/ui/card";
import { PageBreak } from "../../../../components/ui/PageBreak";
import { Sparkle } from "../../../../components/ui/Sparkle";
import { Spotlight } from "../../../../components/ui/Spotlight";

function useIsMd() {
  const [isMd, setIsMd] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setIsMd(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMd(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isMd;
}

export const BenefitsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredSecurity, setIsHoveredSecurity] = useState(false);
  const [isHoveredFastDev, setIsHoveredFastDev] = useState(false);
  const [isHoveredROI, setIsHoveredROI] = useState(false);
  const isMd = useIsMd();
  return (
    <section id="benefits" className="flex flex-col items-center w-full relative px-6 py-16 bg-[#0b011d]">
      <PageBreak />
      <div className="relative w-full h-auto flex flex-col items-center md:h-[120px] mb-12 mt-2 md:-mt-14">
        <Image
          src="/beniTitle.png"
          alt="Beni Title Background"
          className="absolute left-1/2 top-[14px] md:-top-[10px] -translate-x-1/2 md:w-[1200px] md:h-[180px] object-contain opacity-100 pointer-events-none select-none z-0"
          width={1200}
          height={180}
        />
        <h2 className="relative z-10 w-full font-['Inter','Helvetica'] font-semibold text-white text-[48px] md:text-[64px] text-center tracking-[0.50px] md:leading-[76.8px] mt-[-14px] md:mt-0">
          Benefits.
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 gap-4 w-full max-w-6xl mx-auto auto-rows-[160px] md:auto-rows-[180px]">
        {/* 1st row: Responsive by Design (2 col, 1 row), Security (1 col, 2 row), Fast Dev (1 col, 2 row) */}
        {/* Responsive by Design Card */}
        <Card
          className="rounded-2xl col-span-2 md:col-span-2 md:row-span-1 flex flex-col justify-center items-center p-0 relative overflow-hidden min-h-[220px] md:min-h-[250px] group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated Spotlight */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-0"
            animate={{ opacity: isHovered ? 0.8 : 0.5, scale: isHovered ? 1.06 : 0.8, x: isHovered ? 64 : 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Spotlight className="absolute left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/2 w-[120%] h-[120%]" fill="#00D8FF" fillOpacity={0.18} />
            <Spotlight className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/4 w-[120%] h-[120%]" fill="#916CE7" fillOpacity={0.5} />
          </motion.div>
          <div className="relative z-10 flex flex-col items-center w-full h-full pt-8 md:pt-6 pb-0 overflow-visible">
            <div className="text-center mb-3 md:mb-5">
              <span className="text-white/100 text-[24px] md:text-2xl font-semibold leading-relaxed">Responsive by </span>
              <span className="text-[#916be7] text-[24px] md:text-2xl font-semibold leading-relaxed">Design</span>
            </div>
            {/* Animated Devices */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] md:bottom-[-40px] flex items-end justify-center w-auto h-auto md:h-[200px] pointer-events-none z-0 px-4"
              animate={{ gap: isHovered ? '0.2rem' : '1.5rem', y: isHovered ? -6 : 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{ display: 'flex' }}
            >
              <Image src="/tabletsc.svg" alt="Tablet" className="relative z-0 w-[140px] h-[180px] md:w-[200px] md:h-[240px] object-contain -mr-6 md:-mr-14" width={200} height={240} />
              <Image src="/mobilesc.svg" alt="Mobile" className="relative z-1 w-[60px] h-[110px] md:w-[90px] md:h-[150px] object-contain md:mx-4" width={90} height={150} />
              <Image src="/laptopsc.svg" alt="Laptop" className="relative z-0 w-[200px] h-[140px] md:w-[290px] md:h-[200px] object-contain -ml-6 md:-ml-14" width={290} height={200} />
            </motion.div>
          </div>
        </Card>
        {/* Security-First Approach Card */}
        <Card
          className="rounded-2xl md:col-span-1 md:row-span-1 flex flex-col justify-center items-center relative overflow-hidden"
          onMouseEnter={() => setIsHoveredSecurity(true)}
          onMouseLeave={() => setIsHoveredSecurity(false)}
        >
          {/* Orange radial gradient bottom left */}
          <motion.div
            className="pointer-events-none absolute left-0 bottom-0 w-3/4 h-3/4"
            animate={{ opacity: isHoveredSecurity ? 0.15 : 0.10 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ background: "radial-gradient(circle at left bottom, rgba(255,140,0,1) 0%, transparent 60%)" }}
          />
          <motion.div
            className="flex flex-col items-center justify-center h-full w-full gap-4 py-8"
            animate={{ scale: isHoveredSecurity ? 1.040 : 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <motion.img
              src="/security.svg"
              alt="Security"
              className="w-32 h-32 mb-2 opacity-90"
              animate={{
                scale: isHoveredSecurity ? 1.045 : 1,
                filter: isHoveredSecurity ? 'drop-shadow(0 0 16px rgba(255,140,0,0.10))' : 'none',
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
            <motion.div
              className="text-center"
              animate={{
                scale: isHoveredSecurity ? 1.045 : 1,
                textShadow: isHoveredSecurity
                  ? '0 0 8px rgba(255,140,0,0.10)'
                  : 'none',
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <span className="text-[#916be7] font-semibold text-[20px] md:text-2xl">Security</span>
              <span className="text-white font-semibold text-[20px] md:text-2xl">-First</span>
              <br />
              <span className="text-white font-semibold text-[16px] md:text-2xl">Approach</span>
            </motion.div>
          </motion.div>
        </Card>
        {/* Fast Dev/Load Card */}
        <Card
          className="rounded-2xl md:col-span-1 md:row-span-2 flex flex-col justify-between items-center relative overflow-hidden"
          onMouseEnter={() => setIsHoveredFastDev(true)}
          onMouseLeave={() => setIsHoveredFastDev(false)}
        >
          <div className="flex flex-col w-full pt-6 md:pt-12 md:pb-4">
            <motion.div
              className="text-center font-bold text-[20px] md:text-2xl mb-0 md:mb-2"
              animate={{
                scale: isHoveredFastDev ? 1.045 : 1,
                textShadow: isHoveredFastDev
                  ? '0 0 8px rgba(145,108,231,0.10)'
                  : 'none',
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <span className="text-white">Fast </span>
              <span className="text-[#916be7]">Dev.</span>
            </motion.div>
            <motion.div
              className="text-center font-bold text-[16px] md:text-xl"
              animate={{
                scale: isHoveredFastDev ? 1.06 : 1,
                textShadow: isHoveredFastDev
                  ? '0 0 8px rgba(145,108,231,0.20)'
                  : 'none',
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <span className="text-white">Fast </span>
              <span className="text-[#916be7]">load.</span>
            </motion.div>
          </div>
          <motion.img
            src="/fast.png"
            alt="Fast Dev"
            className="w-auto h-auto max-w-[130px] max-h-[170px] md:w-2/3 md:h-2/3 md:max-w-[280px] md:max-h-[380px] object-contain absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3"
            animate={{
              scale: isHoveredFastDev ? 1.5 : 1,
              filter: isHoveredFastDev ? 'drop-shadow(0 0 16px rgba(145,108,231,0.20))' : 'none',
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{filter: 'drop-shadow(12px 18px 24px #0D0115)'}}
          />
        </Card>
        {/* ROI-Driven Solutions Card */}
        <Card
          className="rounded-[18.88px] md:col-span-3 md:row-span-1 flex flex-col justify-between p-0 bg-[linear-gradient(60deg,#100f2e,#0f0029)] outline outline-[0.94px] outline-offset-[-0.94px] outline-[#6971a2]/40 overflow-hidden relative"
          onMouseEnter={() => setIsHoveredROI(true)}
          onMouseLeave={() => setIsHoveredROI(false)}
        >
          <div className="absolute md:left-[339.10px] md:top-[30.21px] top-4 text-center justify-start z-10">
            <span className="text-[#916be7] text-lg md:text-2xl font-semibold font-['Inter','Helvetica'] leading-relaxed">ROI-Driven</span>
            <span className="text-white/60 text-lg md:text-2xl font-semibold font-['Inter','Helvetica'] leading-relaxed"> Solutions.</span>
          </div>
          <motion.img
            className="w-[296px] h-[185px] left-[-10px] md:w-[729.60px] md:h-[370.09px] md:left-[125.19px] absolute"
            style={{}}
            src="/image 59.svg"
            alt="ROI Chart"
            animate={{ scale: isHoveredROI ? 1.045 : 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
          <motion.img
            className="w-[30px] h-[23.24px] left-[11px] absolute md:w-[98px] md:h-[75.91px] md:left-[107.63px]"
            style={{ top: isMd ? (isHoveredROI ? 98.19 + 6 : 98.19) : (isHoveredROI ? 172.3 + 6 : 172.3) }}
            src="/image 1.svg"
            alt="Money 1"
            animate={{ scale: isHoveredROI ? 1.045 : 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
          <motion.img
            className="w-[29.47px] h-[19px] left-[77px] absolute md:w-[86.10px] md:h-[55.51px] md:left-[434.29px]"
            style={{ top: isMd ? (isHoveredROI ? 178.44 + 6 : 178.44) : (isHoveredROI ? 239 + 6 : 239) }}
            src="/image 2.svg"
            alt="Money 2"
            animate={{ scale: isHoveredROI ? 1.045 : 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
          <motion.img
            className="w-[26.71px] h-[21.68px] left-[21.86px] absolute md:w-[87.24px] md:h-[70.81px] md:left-[162.39px]"
            style={{ top: isMd ? (isHoveredROI ? 15.11 + 6 : 15.11) : (isHoveredROI ? 135 + 6 : 135) }}
            src="/image 3.svg"
            alt="Money 3"
            animate={{ scale: isHoveredROI ? 1.045 : 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
          <motion.img
            className="w-[24.40px] h-[19px] left-[61px] absolute md:w-[74.21px] md:h-[57.78px] md:left-[388.03px]"
            style={{ top: isMd ? (isHoveredROI ? 98.19 + 6 : 98.19) : (isHoveredROI ? 212 + 6 : 212) }}
            src="/image 4.svg"
            alt="Money 4"
            animate={{ scale: isHoveredROI ? 1.045 : 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
          <motion.img
            className="w-[20.98px] h-[17.86px] left-[157.93px] absolute md:w-[68.54px] md:h-[58.35px] md:left-[721.30px]"
            style={{ top: isMd ? (isHoveredROI ? 44.37 + 6 : 44.37) : (isHoveredROI ? 148.32 + 6 : 148.32) }}
            src="/image 5.svg"
            alt="Money 5"
            animate={{ scale: isHoveredROI ? 1.045 : 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
          <motion.img
            className="w-[33.57px] h-[26px] left-[7px] absolute md:w-[98px] md:h-[75.91px] md:left-[226.59px]"
            style={{ top: isMd ? (isHoveredROI ? 173.72 + 6 : 173.72) : (isHoveredROI ? 237 + 6 : 237) }}
            src="/image 6.svg"
            alt="Money 6"
            animate={{ scale: isHoveredROI ? 1.045 : 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
          <motion.img
            className="w-[31.39px] h-[29.13px] left-[109.47px] absolute md:w-[102.53px] md:h-[95.17px] md:left-[520.20px]"
            style={{ top: isMd ? (isHoveredROI ? 70.81 + 6 : 70.81) : (isHoveredROI ? 159.76 + 6 : 159.76) }}
            src="/image 7.svg"
            alt="Money 7"
            animate={{ scale: isHoveredROI ? 1.045 : 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
        </Card>
        {/* Professional Integrations Card */}
        <Card className="rounded-[19.15px] row-span-2 md:col-span-1 md:row-span-2 h-auto flex flex-col justify-between p-0 relative overflow-hidden outline outline-1 outline-offset-[-0.96px] outline-[#6971a2]/40 bg-[linear-gradient(60deg,#100f2e,#0f0029)]">
          {/* Grid background - smaller, centered, radial mask */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] pointer-events-none z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(circle,rgba(255,255,255,0.7)_60%,transparent_100%)]" />
          {/* Title */}
          <div className="absolute md:w-[225px] w-full md:left-[38px] left-4 md:top-[39px] top-4 text-left z-10">
            <span className="text-white/80 text-2xl font-semibold font-['Inter','Helvetica'] leading-relaxed">Professional </span>
            <span className="text-[#916be7] text-2xl font-semibold font-['Inter','Helvetica'] leading-relaxed">Integrations.</span>
          </div>
          {/* CardButtons - flex column, alternate left/right, padding */}
          <div className="absolute z-10 w-full md:px-4 left-0 md:top-[140px] top-34 h-[calc(100%-110px)] flex flex-col gap-6">
            <div className="flex justify-start pl-4"><CardButton icon="/webflow.svg" className="px-4 py-2 text-white text-[19px] font-semibold">webflow</CardButton></div>
            <div className="flex justify-end pr-4"><CardButton icon="/shopify.svg" className="px-4 py-2 text-white text-[19px] font-semibold">shopify</CardButton></div>
            <div className="flex justify-start pl-4"><CardButton icon="/firebase.svg" className="px-4 py-2 text-white text-[19px] font-semibold">Firebase</CardButton></div>
            <div className="flex justify-end pr-4"><CardButton icon="/Stripe.svg" className="px-4 py-2 text-white text-[19px] font-semibold">Stripe</CardButton></div>
            <div className="flex justify-start pl-4"><CardButton icon="/Airtable.svg" className="px-4 py-2 text-white text-[19px] font-semibold">Airtable</CardButton></div>
            <div className="flex justify-end pr-4"><CardButton icon="/cloudflare.svg" className="px-4 py-2 text-white text-[19px] font-semibold">Cloudflare</CardButton></div>
            <div className="flex justify-start pl-4"><CardButton icon="/Sanity.svg" className="px-4 py-2 text-white text-[19px] font-semibold">Sanity</CardButton></div>
          </div>
        </Card>
        {/* Time-Efficient Delivery Card */}
        <Card className="rounded-[19.15px] md:col-span-2 md:row-span-1 flex flex-col md:flex-row justify-center items-center md:items-stretch p-0 relative overflow-hidden outline outline-1 outline-offset-[-0.96px] outline-[#6971a2]/40 bg-[linear-gradient(39deg,#100f2e,#0f0029)]">
          {/* Content centered for mobile, row for md+ */}
          <div className="flex flex-col md:flex-row justify-center items-center w-full h-full">
            <div className="flex flex-col justify-center items-center md:items-start gap-[4px] md:gap-[9px] px-3 md:px-[62px] py-0 z-10">
              <div className="w-full md:w-[237px] text-center md:text-left">
                <span className="text-[#916be7] text-base md:text-2xl font-semibold font-['Inter','Helvetica'] leading-relaxed">Time-Efficient</span>
                <span className="text-white/60 text-base md:text-2xl font-semibold font-['Inter','Helvetica'] leading-relaxed"> Delivery.</span>
              </div>
              <div className="text-[#9f9eab] text-xs md:text-base font-semibold font-['Inter','Helvetica'] leading-[14px] md:leading-[17.6px] text-center md:text-left">Balancing speed and design precision.</div>
            </div>
            {/* Clock SVG below text on mobile, right on md */}
            <div className="flex items-center justify-center mt-6 md:mt-0 md:ml-4 md:self-center md:mr-[40px] z-0">
              <img src="/clockcard.svg" alt="Clock Card" className="w-[110px] h-[110px] md:w-[180px] md:h-[180px]" />
            </div>
          </div>
        </Card>
        {/* Powerful, Custom CMS Card */}
        <Card className="rounded-[19.15px] md:col-span-1 md:row-span-1 flex flex-col items-center justify-end p-0 relative overflow-hidden">
          {/* Grid background - smaller, centered, radial mask */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[70%] pointer-events-none z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(circle,rgba(255,255,255,0.7)_60%,transparent_100%)]" />
          {/* Spotlight */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Spotlight className="w-full h-full" fill="#916be7" fillOpacity={0.12} />
          </div>
          {/* CMS Image */}
          <Image src="/cms.png" alt="Custom CMS" className="relative z-10 w-[60%] md:max-w-[320px] md:mt-10 mb-3 md:mb-6" width={320} height={180} />
          {/* Title */}
          <div className="relative z-10 text-center mb-4 md:mb-8">
            <span className="block text-[18px] md:text-2xl font-semibold text-white/80 leading-tight">Powerful, Custom</span>
            <span className="block text-[18px] md:text-2xl font-semibold text-[#916be7] leading-tight">CMS</span>
          </div>
        </Card>
        {/* SEO that Works Card */}
        <Card className="rounded-[19.15px] md:col-span-1 md:row-span-1 flex flex-col items-center justify-end p-0 relative overflow-hidden md:col-start-2">
        {/* Grid background - smaller, centered, radial mask */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[70%] pointer-events-none z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(circle,rgba(255,255,255,0.7)_60%,transparent_100%)]" />
            {/* Large faded SEO SVG */}
            <Image src="/SEO.svg" alt="SEO" className="absolute inset-0 w-auto h-full p-5 md:p-10 object-contain z-0 select-none pointer-events-none" width={200} height={200} />
            {/* Title */}
           <div className="relative z-10 text-center mb-4 md:mb-8">
           <span className="text-[18px] md:text-2xl font-bold text-[#916be7]">SEO</span>
           <span className="text-[18px] md:text-2xl font-bold text-white/80 ml-2">that Works</span>
          </div>
        </Card>
        {/* Clear & Consistent Communication Card */}
        <Card className="relative col-span-2 row-span-1 w-auto bg-[linear-gradient(60deg,#100f2e,#0f0029)] rounded-[19.15px] overflow-hidden md:col-span-2 md:row-span-1 p-0" >
          {/* Sparkles (stars) background */}
          <Sparkle className="absolute inset-0 w-full h-full z-0" background="transparent" particleColor="#fff" minSize={.5} maxSize={2} speed={2} particleDensity={100} />
          {/* Text */}
          <div className="absolute md:left-[40px] left-4 md:top-[70px] top-4 text-left z-10">
            <div className="text-white/100 text-[16px] md:text-2xl font-semibold font-['Inter','Helvetica'] leading-relaxed inline-block mr-1">Clear &amp; Consistent</div>
            <div className="text-[#916be7] text-[16px] md:text-2xl font-semibold font-['Inter','Helvetica'] leading-relaxed inline-block">Communication</div>
          </div>
          <div className="absolute md:left-[40px] left-4 md:top-[120px] top-10 text-left z-10">
            <div className="text-white/60 text-[16px] md:text-2xl font-semibold font-['Inter','Helvetica'] leading-relaxed inline-block mr-1">Proven</div>
            <div className="text-[#916be7] text-[16px] md:text-2xl font-semibold font-['Inter','Helvetica'] leading-relaxed inline-block">Experience</div>
          </div>
          {/* Planets */}
          <Image src="/Planetorange.svg" alt="Planet Orange" className="absolute left-[-10px] md:left-[-10px] bottom-[-10px] md:bottom-[-10px] w-[100px] md:w-[120px] h-[100px] md:h-[120px] z-8" style={{ filter: "drop-shadow(0 0 32px rgba(255,172,77,0.5))" }} width={120} height={120} />
          <Image src="/Planetpurple.svg" alt="Planet Purple" className="absolute right-[10px] md:right-[30px] top-[10px] md:bottom-[20px] w-[160px] md:w-[200px] h-[160px] md:h-[200px] z-8" style={{ filter: "drop-shadow(0 0 40px rgba(145,108,231,0.5))" }} width={200} height={200} />
        </Card>
      </div>
    </section>
  );
};
