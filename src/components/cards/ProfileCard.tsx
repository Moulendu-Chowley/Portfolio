import Image from "next/image";
import React from "react";
import { CardButton } from "../ui/card";

interface ProfileCardProps {
  avatarSrc: string;
  name: string;
  role: React.ReactNode;
  description: React.ReactNode;
  tags: { icon?: React.ReactNode; label: string }[];
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarSrc,
  name,
  role,
  description,
  tags,
  className = "",
}) => {
  return (
    <div className={`p-5 bg-[linear-gradient(60deg,#100f2e,#0f0029)] rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#6971a2]/40 flex flex-col justify-center items-center gap-[33px] ${className}`}>
      <div className="w-full flex justify-center items-center gap-[18px]">
        <Image className="h-[110px] w-[110px] object-cover rounded-lg" src={avatarSrc} alt={name} width={110} height={110} />
        <div className="flex-1 flex flex-col justify-start items-start gap-2">
          <span className="bg-[#916be7] text-white px-3 py-1 rounded-full text-xs mb-1">Available To Work</span>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-[#e6e6e6] text-[18px] md:text-[24px] font-semibold [font-family:'Inter',Helvetica] leading-normal">{name}</div>
            <div className="flex justify-start items-center gap-1">
              <span className="text-[#999999] text-sm font-medium [font-family:'Inter',Helvetica]">I&apos;m a</span>
              <span className="text-[#916be7] text-sm font-semibold [font-family:'Inter',Helvetica]">{role}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center gap-2 overflow-hidden pl-0">
        <div className="flex-1 text-[#e6e6e6] text-sm font-medium [font-family:'Inter','Helvetica']">{description}</div>
      </div>
      <div className="w-full p-3 bg-[linear-gradient(128deg,#150138,#0c0023)] rounded-[10px] outline outline-[0.80px] outline-offset-[-0.80px] outline-[#6971a2]/40 flex flex-wrap gap-2.5 content-start">
        {tags.map((tag, idx) => (
          <CardButton key={idx} icon={tag.icon}>
            {tag.label}
          </CardButton>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;