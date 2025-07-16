import React from "react";

interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

interface SocialLinksCardProps {
  links: SocialLink[];
  className?: string;
}

const SocialLinksCard: React.FC<SocialLinksCardProps> = ({ links, className = "" }) => {
  return (
    <div className={`flex flex-col w-[225px] items-center justify-center gap-2 px-2 py-6 rounded-[20px] overflow-hidden border border-[#28204a] bg-[linear-gradient(138deg,rgba(16,15,46,1)_0%,rgba(15,0,42,1)_100%)] ${className}`}>
      <div className="flex flex-col items-center w-full gap-2 mb-2">
        <div className="flex items-center gap-2 px-2.5 py-1.5">
          <img className="w-4 h-4" alt="Follow icon" src="/follow.svg" />
          <span className="font-['Inter',Helvetica] font-medium text-[#999999] text-sm">Follow Me</span>
        </div>
        <h4 className="font-['Inter',Helvetica] font-semibold text-[#e6e6e6] text-base leading-6 whitespace-nowrap">Online Presence</h4>
      </div>
      <div className="flex flex-col items-start gap-4 w-full">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl transition shadow-sm cursor-pointer bg-[linear-gradient(60deg,#100f2e,#0f0029)] outline outline-[0.50px] outline-offset-[-0.50px] outline-[#6971a2]/40 border border-transparent bg-clip-padding mx-4">
              <img className="w-5 h-5" alt={link.label} src={link.icon} />
              <span className="font-['Inter',Helvetica] font-medium text-[#cccccc] text-base">{link.label}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinksCard;