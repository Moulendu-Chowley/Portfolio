"use client";

import StyledProjectCard from "@/components/cards/StyledProjectCard";
import { Button } from "@/components/shared/Button";
import { PageBreak } from "../../../../components/ui/PageBreak";
import { Separator } from "../../../../components/ui/separator";
import { projects } from "../../../../data/projects";

export const WorksSection = () => {
  if (!projects || projects.length === 0) return null;
  const displayProjects = projects.slice(0, 4);

  return (
    <section
      id="work"
      className="flex flex-col items-center w-full relative py-10 mb-10 md:py-16"
    >
      <PageBreak />
      <Separator className="w-full h-[10px]" />
      <div className="flex flex-col items-center gap-5 w-full mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center gap-[4px] md:gap-[16px] w-full">
          <h2 className="w-full font-['Inter',Helvetica] font-semibold text-white text-[48px] md:text-[64px] text-center tracking-[0.50px] leading-[76.8px] md:-mt-16">
            Works.
          </h2>
          <p className="font-medium text-white text-lg md:text-2xl tracking-[0] leading-[28.8px] text-center font-sans">
            A small section of my project
          </p>
        </div>
        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-auto h-auto justify-items-center mt-8 p-6 md:p-18">
          {displayProjects.map((project, idx) => (
            <StyledProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              image={project.image}
              year={project.year}
            />
          ))}
        </div>
        {/* See more button */}
        <Button className="px-4 py-2 md:px-6 md:py-3 text-[14px] md:text-lg mt-6 md:mt-8">See more of my work</Button>
      </div>
    </section>
  );
};
