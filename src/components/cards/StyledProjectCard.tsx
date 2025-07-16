import React from "react";

interface StyledProjectCardProps {
  title: string;
  description: string;
  image: string;
  year: string | number;
}

export const StyledProjectCard: React.FC<StyledProjectCardProps> = ({ title, description, image, year }) => {
  return (
    <div className="relative flex flex-col rounded-2xl border border-white/20 md:border-white/5 bg-[radial-gradient(50%_70.31%_at_50%_0%,rgba(126,61,255,0.04)_0%,rgba(126,61,255,0)_100%),rgba(11,1,29,0.01)] backdrop-blur-lg p-6 w-full max-w-[600px] h-auto mx-auto group shadow-[0_0_0_.51px_rgba(168,128,255,0.32)] md:shadow-none md:transition-shadow md:hover:shadow-[0_0_0_2px_rgba(168,128,255,0.32)]">
      {/* Project Image */}
      <div className="relative w-auto h-auto flex items-center justify-center rounded-xl overflow-hidden mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl opacity-70 shadow-xl"
          style={{ transform: "scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)", transition: "opacity 0.3s" }}
        />
      </div>
      {/* Title and Year */}
      <div className="flex items-center justify-between mb-2">
        <h5 className="text-white text-2xl font-semibold leading-tight">{title}</h5>
        <div className="date-div flex items-center px-4 py-1 rounded-full border border-white/10 bg-white/5 shadow-inner text-xs" style={{ minWidth: 62, height: 32 }}>
          <span className="date-p bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent font-medium">{year}</span>
        </div>
      </div>
      {/* Description */}
      <p className="project-description text-[#74698C] text-base leading-6 font-normal mt-1">{description}</p>
    </div>
  );
};

export default StyledProjectCard; 