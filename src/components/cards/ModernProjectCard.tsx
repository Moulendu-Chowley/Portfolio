"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface ModernProjectCardProps {
  title: string;
  description: string;
  image: string;
  year: string | number;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  index?: number;
}

export const ModernProjectCard: React.FC<ModernProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  year, 
  size = 'medium',
  className = "",
  index = 0
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const sizeClasses = {
    small: "h-[280px]",
    medium: "h-[320px]", 
    large: "h-[400px]"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: index * 0.1
      }}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative group cursor-pointer ${sizeClasses[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/10"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Case Study Badge */}
        <div className="absolute top-4 left-4 z-20">
          <motion.div
            className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-black text-xs font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            Case study
          </motion.div>
        </div>

        {/* Year Badge */}
        <div className="absolute top-4 right-4 z-20">
          <motion.div
            className="px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {year}
          </motion.div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <motion.h3
            className="text-white text-xl md:text-2xl font-bold mb-2 leading-tight"
            animate={{ y: isHovered ? -4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-white/80 text-sm leading-relaxed"
            animate={{ 
              opacity: isHovered ? 1 : 0.8,
              y: isHovered ? -4 : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#916be7]/20 via-transparent to-transparent z-5"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-[#916be7]/50 z-30 pointer-events-none"
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.95
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ModernProjectCard;