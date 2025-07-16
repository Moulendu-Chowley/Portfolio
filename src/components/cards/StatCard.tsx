import { motion } from "framer-motion";
import React from "react";
import useCountUp from "../../lib/useCountUp";
import RollingNumber from "../animations/RollingNumber";
import { CardButton } from "../ui/card";

interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

const isNumeric = (val: string) => /^\d+$/.test(val);

const StatCard: React.FC<StatCardProps> = ({ value, label, icon, className = "" }) => {
  // Animate only if value is numeric
  const [ref, animatedValue] = useCountUp(isNumeric(value) ? parseInt(value, 10) : null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className={`inline-flex flex-col justify-center items-center gap-4 rounded-[14px] p-4 -mb-[4px] bg-[linear-gradient(150deg,#100F2E_0%,#0F002A_100%)] outline outline-1 outline-offset-[-1px] outline-[#6971a2]/40 w-full h-full border border-transparent bg-clip-padding ${className}`}
      data-layer="Statcard1"
    >
      <div className="inline-flex items-center justify-between gap-1" data-layer="Number">
        <span
          ref={isNumeric(value) ? ref : undefined}
          style={{ color: "#FFFDFD", fontWeight: 500, fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}
          className="text-2xl sm:text-4xl"
          data-layer="01"
        >
          {isNumeric(value) ? (
            <RollingNumber value={animatedValue} />
          ) : (
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>{value}</motion.span>
          )}
        </span>
        <span
          style={{ color: "#916CE7", fontWeight: 500, fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}
          className="text-lg sm:text-2xl"
          data-layer="+"
        >
          +
        </span>
      </div>
      <div className="w-full flex justify-center">
        <CardButton className="px-2 py-2 whitespace-nowrap w-full md:w-30" icon={icon}>
          {label}
        </CardButton>
      </div>
    </motion.div>
  );
};

export default StatCard; 