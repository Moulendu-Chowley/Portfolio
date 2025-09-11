"use client";

import { Button } from "@/components/shared/Button";
import Navbar from "@/components/ui/resizable-navbar";
import { motion } from "framer-motion";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-[#000319] text-white relative overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4F46E5]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#4F46E5]/5 to-[#7C3AED]/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon/Illustration */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative mx-auto w-32 h-32 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-2xl opacity-20 animate-pulse" />
              <div className="absolute inset-2 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-xl flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#A5B4FC] to-[#C4B5FD] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Coming Soon
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-[#bcb9d1] mb-8 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I&apos;m working on something amazing for you. This feature is
            currently under development and will be available soon.
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-[#8B7AC7] mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Stay tuned for updates! In the meantime, feel free to explore other
            sections of my portfolio or get in touch.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/">
              <Button className="px-8 py-4 text-lg bg-[#4F46E5] hover:bg-[#4338CA] border-[#4F46E5] hover:border-[#4338CA]">
                Back to Home
              </Button>
            </Link>

            <Link href="/contact">
              <Button className="px-8 py-4 text-lg bg-transparent border border-[#2A2A5A] hover:border-[#4F46E5] hover:bg-[#4F46E5]/10">
                Get in Touch
              </Button>
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 pt-8 border-t border-[#1A1A3A]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <p className="text-sm text-[#666] mb-4">
              Want to be notified when this feature launches?
            </p>
            <Link
              href="/contact"
              className="text-[#4F46E5] hover:text-[#A5B4FC] transition-colors duration-300 text-sm font-medium"
            >
              Contact me for updates →
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
