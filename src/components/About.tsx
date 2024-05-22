"use client";
import SectionHeading from "./SectionHeading";
import AboutData from "@/lib/About";
import { useSectionName } from "@/lib/hooks";
const About = () => {
  const { ref } = useSectionName("About", 0.78);
  return (
    <section className="scroll-mt-28" id="about" ref={ref}>
      <div className="text-center">
        <SectionHeading>about me</SectionHeading>
        <AboutData />
      </div>
    </section>
  );
};
export default About;
