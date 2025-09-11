"use client";
import { motion } from "framer-motion";
import TypewriterText from "../../../../components/animations/TypewriterText";
import ProfileCard from "../../../../components/cards/ProfileCard";
import SocialLinksCard from "../../../../components/cards/SocialLinksCard";
import StatCard from "../../../../components/cards/StatCard";
import TestimonialCard from "../../../../components/cards/TestimonialCard";
import { PageBreak } from "../../../../components/ui/PageBreak";

export const AboutMeSection = () => {
  // Profile tags
  const tags = [
    { icon: "/location.svg", label: "India" },
    { icon: "/globe.svg", label: "English & Hindi" },
    { icon: "/pen.svg", label: "UI/UX Designer" },
    { icon: "/dev.svg", label: "Web & App Developer" },
    { icon: "/clock.svg", label: "Fast Respond" },
  ];

  // Stats
  const stats = [
    { icon: "/project.svg", value: "06", label: "Projects" },
    { icon: "/Smile.svg", value: "02", label: "Happy Clients" },
    { icon: "/timer.svg", value: "03", label: "Year Expertise" },
    { icon: "/happy.svg", value: "10/10", label: "Satisfaction" },
    { icon: "/heart.svg", value: "∞", label: "Passion" },
    { icon: "/clock.svg", value: "Daily", label: "Responses" },
  ];

  // Social links
  const socialLinks = [
    {
      icon: "/Linkedin.svg",
      label: "Moulendu Chowley",
      href: "https://www.linkedin.com/in/moulendu",
    },
    {
      icon: "/instagram.svg",
      label: "moulendu.ux",
      href: "https://www.instagram.com/moulendu.ux",
    },
    {
      icon: "/instagram.svg",
      label: "moulendu.dev",
      href: "https://www.instagram.com/moulendu.dev",
    },
    {
      icon: "/dribble.svg",
      label: "Moulendu Chowley",
      href: "https://dribbble.com/Moulendu",
    },
    {
      icon: "/github.svg",
      label: "Moulendu Chowley",
      href: "https://github.com/Moulendu-Chowley",
    },
  ];

  return (
    <section
      id="about"
      className="flex flex-col items-center w-full relative mb-24"
    >
      {/* Blue gradient background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4F46E5]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4F46E5]/8 rounded-full blur-3xl" />
      <PageBreak />
      <h2 className="w-full font-['Inter',Helvetica] font-semibold text-white text-[48px] md:text-[64px] text-center tracking-[0.50px] leading-[76.8px] mb-12 md:-mt-16 relative z-10">
        About Me.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-8 w-full max-w-7xl items-start px-6">
        {/* Profile Card */}
        <motion.div
          className="col-span-1 md:col-span-3 w-full h-full"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <ProfileCard
            avatarSrc="/Profile.svg"
            name="Moulendu Chowley"
            role={
              <TypewriterText
                texts={[
                  "Graphic Designer",
                  "UI/UX Designer",
                  "Front-end Developer",
                  "Back-end Developer",
                  "Freelancer",
                ]}
                period={1000}
              />
            }
            description={
              <>
                A UI/UX designer and full-stack developer crafting
                high-performance websites that are both elegant and effective.
                <br />
                I combine intuitive design with clean, scalable code to create
                seamless digital experiences. From responsive layouts to secure
                architecture and SEO-friendly builds, I focus on delivering
                results that look great and work flawlessly.
                <br />I help bring ideas to life with clarity and purpose.
                Thanks for visiting my space.
              </>
            }
            tags={tags}
            className="w-auto h-auto flex flex-col"
          />
        </motion.div>
        {/* Stats Cards + Testimonial */}
        <div className="col-span-1 md:col-span-3 w-full h-full">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 w-full h-full items-start auto-rows-auto"
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <StatCard {...stats[0]} className="w-full h-auto" />
            <StatCard {...stats[1]} className="w-full h-auto" />
            <StatCard {...stats[2]} className="w-full h-auto" />
            <StatCard {...stats[3]} className="w-full h-auto" />
            <StatCard {...stats[4]} className="w-full h-auto" />
            <StatCard {...stats[5]} className="w-full h-auto" />
            <motion.div
              className="col-span-2 sm:col-span-2 md:col-span-3 w-full h-full flex"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <TestimonialCard className="w-full h-full" />
            </motion.div>
          </motion.div>
        </div>
        {/* Social Links Card */}
        <motion.div
          className="col-span-1 md:col-span-2 w-full h-full"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <SocialLinksCard links={socialLinks} className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
};
