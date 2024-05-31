"use client";
import { motion } from "framer-motion";
const SectionDevider = () => {
  return (
    <motion.div
      className="my-24 h-8 w-1 rounded-full bg-gray-200"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.75, type: "spring" }}
    />
  );
};
export default SectionDevider;
