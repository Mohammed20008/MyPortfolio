import { ReactNode } from "react";
import { Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";

const SectionHeading = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      className="mb-6 text-center text-4xl font-medium capitalize"
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
    >
      <Highlight className="text-black dark:text-white">{children}</Highlight>
    </motion.div>
  );
};
export default SectionHeading;
