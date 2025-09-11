"use client";

import { Button } from "@/components/shared/Button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    tag: string;
    title: string;
    description: string;
    image: string;
    year: string | number;
    bulletPoints?: string[];
    detailedDescription?: string;
    technologies?: string[];
    links?: {
      live?: string;
      github?: string;
      demo?: string;
    };
    challenge?: string;
    solution?: string;
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  // Debug: Log project data
  React.useEffect(() => {
    if (isOpen && project) {
      console.log("Modal opened with project:", project);
    }
  }, [isOpen, project]);

  // Close on ESC key
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-2 md:inset-8 w-auto h-auto max-w-7xl max-h-[calc(100vh-1rem)] md:max-h-[calc(100vh-4rem)] mx-auto my-auto overflow-hidden bg-[linear-gradient(60deg,#090831,#040022)] rounded-2xl md:rounded-3xl z-50 outline-1 outline-[#6971a2]/40 flex flex-col"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-3 z-10 transition-all duration-200"
              aria-label="Close modal"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#6971a2] scrollbar-track-transparent">
              <div className="p-6 md:p-10">
                {/* Header Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#4F46E5] text-white px-4 py-2 rounded-full text-sm font-medium">
                      {project.tag}
                    </span>
                    <span className="text-[#999999] text-lg">
                      {project.year}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {project.title}
                  </h1>
                  <p className="text-xl text-[#e4ecff] leading-relaxed max-w-4xl">
                    {project.description}
                  </p>
                </div>

                {/* Main Image */}
                <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-black/20 mb-10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                    quality={95}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {/* Left Column - Project Details */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Project Overview */}
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">
                        Project Overview
                      </h2>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-[#e4ecff] leading-relaxed text-lg">
                          {project.detailedDescription || project.description}
                        </p>
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    {project.challenge && (
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/5 p-6 rounded-xl">
                          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="text-red-400">⚡</span>
                            The Challenge
                          </h3>
                          <p className="text-[#e4ecff] leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>

                        {project.solution && (
                          <div className="bg-white/5 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                              <span className="text-green-400">💡</span>
                              The Solution
                            </h3>
                            <p className="text-[#e4ecff] leading-relaxed">
                              {project.solution}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Key Features */}
                    {project.bulletPoints &&
                      project.bulletPoints.length > 0 && (
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-6">
                            Key Features
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {project.bulletPoints.map((point, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-3 p-4 bg-white/5 rounded-lg"
                              >
                                <span className="text-[#A5B4FC] mt-1 text-lg">
                                  •
                                </span>
                                <span className="text-[#e4ecff] leading-relaxed">
                                  {point}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>

                  {/* Right Column - Sidebar */}
                  <div className="space-y-8">
                    {/* Technologies */}
                    {project.technologies &&
                      project.technologies.length > 0 && (
                        <div className="bg-white/5 p-6 rounded-xl">
                          <h3 className="text-xl font-semibold text-white mb-4">
                            Technologies Used
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-2 bg-[#4F46E5]/20 border border-[#4F46E5]/40 rounded-lg text-sm text-[#e4ecff] font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* Project Links */}
                    {project.links && (
                      <div className="bg-white/5 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Project Links
                        </h3>
                        <div className="space-y-3">
                          {project.links.live &&
                            (project.links.live === "coming-soon" ? (
                              <div className="block w-full">
                                <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg p-4 text-center">
                                  <div className="text-amber-400 text-lg font-semibold mb-2">
                                    🚧 Coming Soon
                                  </div>
                                  <div className="text-amber-300 text-sm">
                                    UI is ready! Full functionality in
                                    development.
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full"
                              >
                                <Button>🌐 View Live Site</Button>
                              </a>
                            ))}
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full"
                            >
                              <Button>📂 GitHub Repository</Button>
                            </a>
                          )}
                          {project.links.demo && (
                            <a
                              href={project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full"
                            >
                              <Button>🎥 Watch Demo</Button>
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Project Stats */}
                    <div className="bg-white/5 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Project Details
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-[#999999]">Year:</span>
                          <span className="text-[#e4ecff] font-medium">
                            {project.year}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#999999]">Category:</span>
                          <span className="text-[#e4ecff] font-medium">
                            {project.tag}
                          </span>
                        </div>
                        {project.technologies && (
                          <div className="flex justify-between">
                            <span className="text-[#999999]">Tech Stack:</span>
                            <span className="text-[#e4ecff] font-medium">
                              {project.technologies.length} technologies
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom spacing for scroll */}
                <div className="h-10"></div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
