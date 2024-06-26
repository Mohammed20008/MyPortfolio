"use client";
import SectionHeading from "./SectionHeading";
import AboutData from "@/lib/About";
import { useSectionName } from "@/lib/hooks";
const About = () => {
  const { ref } = useSectionName("About", 1);
  return (
    <section className="scroll-mt-28" id="about" ref={ref}>
      <div>
        <SectionHeading>about me</SectionHeading>
        <div className=" ">
          <AboutData />
        </div>
      </div>
    </section>
  );
};
export default About;
