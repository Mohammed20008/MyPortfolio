"use client";
import Image from "next/image";
import { projectsData } from "../lib/data";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
type Projectype = (typeof projectsData)[number];
const Project = ({ project }: { project: Projectype }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  return (
    <motion.div
      className="projectStyle group"
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      transition={{ delay: 1 }}
    >
      <div className="h-full max-w-[300px]">
        <h2 className="font-semibold dark:text-gray-950">{project.title}</h2>
        <p className="text-gray-700 dark:text-slate-300">
          {project.description}
        </p>
        <ul className="justifce flex flex-wrap items-center gap-1 space-x-1 pt-2">
          {project.tags.map((tag, index) => (
            <li className="project" key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative -right-20 top-5 h-80 shadow-lg transition duration-300 group-hover:-translate-x-2 group-hover:-rotate-2 sm:w-80">
        <Image alt="img" src={project.imageUrl} fill className="rounded-md" />
      </div>
    </motion.div>
  );
};
export default Project;
