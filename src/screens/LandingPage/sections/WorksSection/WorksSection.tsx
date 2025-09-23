"use client";

import BentoProjectCard from "@/components/cards/BentoProjectCard";
import ProjectModal from "@/components/modals/ProjectModal";
import { Button } from "@/components/shared/Button";
import { ModalProvider, useModal } from "@/context/ModalContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageBreak } from "../../../../components/ui/PageBreak";
import { projects } from "../../../../data/projects";

// Create a wrapper component that uses the modal context
const WorksSectionContent = () => {
  const { isModalOpen, currentProject, closeModal } = useModal();

  if (!projects || projects.length === 0) return null;

  return (
    <section
      id="work"
      className="flex flex-col items-center w-full relative py-16 mb-24 px-6"
    >
      {/* Background gradient elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-full blur-3xl z-0" />
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/15 to-indigo-500/15 rounded-full blur-3xl z-0" />
      {/* Project Modal */}
      {currentProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={currentProject}
        />
      )}
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
          A curated selection of projects that showcase my design and
          development expertise.
        </p>
      </motion.div>

      {/* Bento Grid Layout */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Desktop Bento Grid */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-8 h-[900px]">
          {/* Large featured project - top left */}
          <BentoProjectCard
            {...projects[0]}
            className="col-span-2 row-span-1"
            index={0}
          />

          {/* Medium project - top right */}
          <BentoProjectCard
            {...projects[1]}
            className="col-span-1 row-span-1"
            index={1}
          />

          {/* Small project - middle right */}
          <BentoProjectCard
            {...projects[2]}
            className="col-span-1 row-span-1"
            index={2}
          />

          {/* Small project - bottom right */}
          <BentoProjectCard
            {...projects[3]}
            className="col-span-2 row-span-1"
            index={3}
          />
        </div>

        {/* Tablet Grid Layout */}
        <div className="hidden md:grid lg:hidden grid-cols-4 grid-rows-3 gap-6 h-[700px]">
          {/* Large featured project */}
          <BentoProjectCard
            {...projects[0]}
            className="col-span-2 row-span-2"
            index={0}
          />

          {/* Medium projects */}
          <BentoProjectCard
            {...projects[1]}
            className="col-span-2 row-span-1"
            index={1}
          />

          <BentoProjectCard
            {...projects[2]}
            className="col-span-1 row-span-1"
            index={2}
          />

          <BentoProjectCard
            {...projects[3]}
            className="col-span-1 row-span-1"
            index={3}
          />
        </div>

        {/* Mobile Grid Layout */}
        <div className="grid md:hidden grid-cols-1 gap-4">
          {/* Featured project spans full width */}
          <BentoProjectCard
            {...projects[0]}
            className="col-span-1 h-[280px]"
            index={0}
          />

          {/* Two medium projects side by side */}
          <BentoProjectCard
            {...projects[1]}
            className="col-span-1 h-[220px]"
            index={1}
          />

          <BentoProjectCard
            {...projects[2]}
            className="col-span-1 h-[220px]"
            index={2}
          />

          {/* Wide project spans full width */}
          <BentoProjectCard
            {...projects[3]}
            className="col-span-1 h-[200px]"
            index={3}
          />
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="flex flex-col items-center gap-6 mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="text-[#bcb9d1] text-center text-base md:text-lg max-w-md">
          Want to see more of my work? Check out my complete portfolio.
        </p>
        <Link href="/works">
          <Button className="px-6 py-3 text-lg">View All Projects</Button>
        </Link>
      </motion.div>
    </section>
  );
};

// Export the WorksSection with ModalProvider
export const WorksSection = () => {
  return (
    <ModalProvider>
      <WorksSectionContent />
    </ModalProvider>
  );
};
