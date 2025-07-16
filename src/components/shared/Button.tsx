import { Button as ShadcnButton } from "@/components/ui/button";
import React from "react";

interface ButtonProps extends React.ComponentProps<typeof ShadcnButton> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button = ({ children, className, icon, ...props }: ButtonProps) => {
  return (
    <ShadcnButton
      className={`flex items-center justify-center ${icon ? "gap-2.5" : ""} relative rounded-[40px] outline outline-1 outline-offset-[-1px] outline-[#6971a2]/40 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:outline-[#916be7] active:outline-2 focus:outline-[#916be7] focus:outline-2 ${className || ""}`}
      style={{ background: "var(--gradient-button)" }}
      {...props}
    >
      <span className="flex-1 flex items-center justify-center [font-family:'Inter-Medium',Helvetica] font-medium text-white tracking-[-0.48px] leading-[21.6px] whitespace-nowrap">
        {children}
      </span>
      {icon && (
        <span className="flex items-center justify-center">{icon}</span>
      )}
    </ShadcnButton>
  );
};

export default Button;

interface CardButtonProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const CardButton = ({ icon, children, className }: CardButtonProps) => (
  <div
    className={`self-stretch px-5 py-1.5 rounded-[40px] outline outline-[0.50px] outline-offset-[-0.50px] outline-[#6971a2]/40 inline-flex justify-center items-center gap-2.5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:outline-[#916be7] active:outline-2 ${className || ""}`}
    style={{ background: "var(--gradient-cardbutton)" }}
  >
    {icon && <div className="w-[9.60px] h-3.5 bg-[#916be7] flex-shrink-0 flex items-center justify-center">{icon}</div>}
    <div className="justify-start text-[#cccccc] text-[13px] font-medium font-['Inter','Helvetica']">{children}</div>
  </div>
);

interface SocialIconButtonProps {
  icon: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SocialIconButton = ({ icon, className, onClick }: SocialIconButtonProps) => (
  <button
    type="button"
    className={`w-6 h-6 md:w-10 md:h-10 bg-[#05041f14] rounded-lg overflow-hidden shadow-[inset_0px_0px_8px_0.82px_#ffffff1f] border-[#ffffff14] flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:border-[#916be7] active:border-2 ${className || ""}`}
    onClick={onClick}
  >
    {icon}
  </button>
);