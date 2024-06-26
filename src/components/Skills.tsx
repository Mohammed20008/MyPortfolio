"use client";
import { skillsData } from "@/lib/data";
import { useSectionName } from "@/lib/hooks";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
const Skills = () => {
  const { ref } = useSectionName("Skills", 1);
  <SectionHeading>My Skills</SectionHeading>;

  return (
    <section ref={ref} id="skills" className="flex scroll-mt-28">
      <ul className="flex max-w-2xl flex-wrap items-center justify-center gap-1">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="skills"
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
    </section>
  );
};
export default Skills;
