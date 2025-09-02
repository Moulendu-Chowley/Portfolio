"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface BentoProjectCardProps {
  title: string;
  description: string;
  image: string;
  year: string | number;
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  className?: string;
  index?: number;
}

export const BentoProjectCard: React.FC<BentoProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  year, 
  size = 'medium',
  className = "",
  index = 0
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1
      }}
      viewport={{ once: true, amount: 0.2 }}
      className={`relative group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full rounded-2xl overflow-hidden border border-[#6971a2]/20 bg-[linear-gradient(135deg,#1a1a2e_0%,#16213e_100%)]"
        whileHover={{ 
          scale: 1.02,
          borderColor: "rgba(145, 108, 231, 0.4)"
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"
            animate={{
              background: isHovered 
                ? "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.3), rgba(0,0,0,0.1))"
                : "linear-gradient(to top, rgba(0,0,0,0.90), rgba(0,0,0,0.40), rgba(0,0,0,0.20))"
            }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Case Study Badge */}
        <div className="absolute top-4 left-4 z-20">
          <motion.div
            className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-black text-xs font-medium shadow-lg"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            Case study
          </motion.div>
        </div>

        {/* Year Badge */}
        <div className="absolute top-4 right-4 z-20">
          <motion.div
            className="px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/20"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            {year}
          </motion.div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
          <motion.h3
            className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2 leading-tight"
            animate={{ 
              y: isHovered ? -6 : 0,
              textShadow: isHovered ? "0 4px 20px rgba(0,0,0,0.5)" : "0 2px 10px rgba(0,0,0,0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-white/80 text-sm md:text-base leading-relaxed line-clamp-2"
            animate={{ 
              opacity: isHovered ? 1 : 0.9,
              y: isHovered ? -6 : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#916be7]/10 via-transparent to-transparent z-5 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Animated Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-[#916be7]/60 z-30 pointer-events-none"
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.98,
            boxShadow: isHovered 
              ? "0 0 30px rgba(145, 108, 231, 0.3), inset 0 0 30px rgba(145, 108, 231, 0.1)"
              : "none"
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default BentoProjectCard;