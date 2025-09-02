"use client";

import ModernProjectCard from "@/components/cards/ModernProjectCard";
import { Button } from "@/components/shared/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageBreak } from "../../../../components/ui/PageBreak";
import { projects } from "../../../../data/projects";

export const WorksSection = () => {
  if (!projects || projects.length === 0) return null;
  const displayProjects = projects.slice(0, 6);

  return (
    <section
      id="work"
      className="flex flex-col items-center w-full relative py-16 mb-24 px-6"
    >
      <PageBreak />
      
      {/* Section Header */}
      <motion.div
        className="flex flex-col items-center gap-4 w-full mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="w-full font-['Inter',Helvetica] font-semibold text-white text-[48px] md:text-[64px] text-center tracking-[0.50px] leading-[76.8px] md:-mt-16 relative z-10">
          Works.
        </h2>
        <p className="text-[#bcb9d1] text-lg md:text-2xl font-normal leading-relaxed text-center max-w-2xl">
          A curated selection of projects that showcase my design and development expertise.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-12 md:grid-rows-6 gap-6 h-[800px]">
          {/* Large featured project - spans 6 cols, 4 rows */}
          <ModernProjectCard
            {...displayProjects[0]}
            size="large"
            className="col-span-6 row-span-4"
            index={0}
          />
          
          {/* Medium project - spans 6 cols, 2 rows */}
          <ModernProjectCard
            {...displayProjects[1]}
            size="medium"
            className="col-span-6 row-span-2"
            index={1}
          />
          
          {/* Small project - spans 3 cols, 2 rows */}
          <ModernProjectCard
            {...displayProjects[2]}
            size="small"
            className="col-span-3 row-span-2"
            index={2}
          />
          
          {/* Medium project - spans 6 cols, 2 rows */}
          <ModernProjectCard
            {...displayProjects[1]}
            size="medium"
            className="col-span-6 row-span-2"
            index={3}
          />
          
          {/* Small project - spans 3 cols, 2 rows */}
          <ModernProjectCard
            {...displayProjects[2]}
            size="small"
            className="col-span-3 row-span-2"
            index={4}
          />
        </div>

        {/* Mobile Grid Layout */}
        <div className="grid md:hidden grid-cols-1 gap-6">
          {displayProjects.slice(0, 4).map((project, idx) => (
            <ModernProjectCard
              key={idx}
              {...project}
              size="medium"
              index={idx}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="flex flex-col items-center gap-6 mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="text-[#bcb9d1] text-center text-base md:text-lg max-w-md">
          Want to see more of my work? Check out my complete portfolio.
        </p>
        <Link href="/works">
          <Button className="px-6 py-3 text-lg">
            View All Projects
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};