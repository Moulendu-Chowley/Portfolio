"use client";

import { Button } from "@/components/shared/Button";
import Navbar from "@/components/ui/resizable-navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";

const Works = () => {
  return (
    <div className="min-h-screen bg-[#000319] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-24 px-6 pb-16">
        {/* Header Section */}
        <motion.div
          className="max-w-7xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
            My Works
          </h1>
          <p className="text-lg md:text-xl text-[#bcb9d1] text-center max-w-3xl mx-auto leading-relaxed">
            A collection of carefully crafted digital experiences that showcase
            my expertise in design and development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Project Card */}
                <div className="bg-[#0A0A2A]/30 border border-[#1A1A3A] rounded-2xl overflow-hidden hover:border-[#2A2A5A] transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                  {/* Project Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000319]/80 via-transparent to-transparent" />

                    {/* Project Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        {project.tag}
                      </span>
                    </div>

                    {/* Year */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#4F46E5]/20 backdrop-blur-sm border border-[#4F46E5]/30 px-3 py-1 rounded-full text-sm font-medium text-[#A5B4FC]">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 lg:p-8">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-[#A5B4FC] transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-[#bcb9d1] text-base lg:text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features/Bullet Points */}
                    <div className="mb-8">
                      <ul className="space-y-2">
                        {project.bulletPoints
                          .slice(0, 3)
                          .map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className="flex items-start gap-3 text-sm lg:text-base text-[#bcb9d1]"
                            >
                              <div className="w-1.5 h-1.5 bg-[#4F46E5] rounded-full mt-2 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies
                          .slice(0, 4)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-[#1A1A3A]/50 border border-[#2A2A5A] px-3 py-1 rounded-lg text-sm text-[#A5B4FC]"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 4 && (
                          <span className="bg-[#1A1A3A]/50 border border-[#2A2A5A] px-3 py-1 rounded-lg text-sm text-[#666]">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      {project.links.live !== "coming-soon" ? (
                        <Link
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button className="w-full bg-[#4F46E5] hover:bg-[#4338CA] border-[#4F46E5] hover:border-[#4338CA] transition-all duration-300">
                            View Project
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          disabled
                          className="flex-1 bg-[#2A2A5A]/50 border-[#2A2A5A] text-[#666] cursor-not-allowed"
                        >
                          Coming Soon
                        </Button>
                      )}

                      <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full border border-[#2A2A5A] hover:border-[#4F46E5] hover:bg-[#4F46E5]/10 bg-transparent transition-all duration-300">
                          View Code
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="max-w-4xl mx-auto mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg text-[#bcb9d1] mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate and bring your ideas to life. I&apos;m always
            excited to work on new challenges and create exceptional digital
            experiences.
          </p>
          <Link href="/contact">
            <Button className="px-8 py-4 text-lg bg-[#4F46E5] hover:bg-[#4338CA] border-[#4F46E5] hover:border-[#4338CA]">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
