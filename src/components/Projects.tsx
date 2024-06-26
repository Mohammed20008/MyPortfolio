"use client";
import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import { useSectionName } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionName("Projects", 0.25);
  return (
    <section id="projects" className=" scroll-mt-24 transition" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div className="flex flex-col space-y-4">
        {projectsData.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
