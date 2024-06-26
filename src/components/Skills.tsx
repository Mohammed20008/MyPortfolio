"use client";
import { skillsData } from "@/lib/data";
import { useSectionName } from "@/lib/hooks";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
const Skills = () => {
  <SectionHeading>My Skills</SectionHeading>;

  const { ref } = useSectionName("Skills");
  return (
    <div ref={ref} id="skills" className="flex scroll-mt-28">
      <ul className="flex max-w-2xl flex-wrap items-center justify-center gap-1">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="mb-1 ml-1 flex cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-gray-100 p-2 text-gray-700 hover:scale-110 hover:bg-gray-200 dark:border-none dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
            custom={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.05 },
            }}
            viewport={{
              once: true,
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
export default Skills;
