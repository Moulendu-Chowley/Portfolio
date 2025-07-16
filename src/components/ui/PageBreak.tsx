export const PageBreak = () => (
  <div className="relative w-full max-w-7xl mx-auto h-10 sm:h-14 md:h-20 lg:h-28 xl:h-32 2xl:h-40 flex items-start justify-center">
    {/* Glowing radial background */}
    <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ background: 'radial-gradient(ellipse 89.28% 89.28% at 50% 0%, #1c0050 0%, rgba(11,1,29,0.02) 57%)' }} />
    {/* White line with gradient fade at both ends */}
    <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent" />
    {/* Optional: subtle outline for extra separation */}
    <div className="absolute left-0 top-[2.8px] w-full h-0 outline outline-2 outline-offset-[-1px] outline-[#0b011d]/0" />
  </div>
); 