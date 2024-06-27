"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDevider from "@/components/SectionDevider";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import { ModeToggle } from "../components/ToggleMode";

export default function Home() {
  return (
    <motion.div
      className="relative mt-24 flex max-w-3xl flex-col items-center space-y-8 px-2"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween" }}
    >
      <Intro />
      <SectionDevider />
      <About />
      <SectionDevider />
      <Projects />
      <SectionDevider />
      <Skills />
      {/* <StickyScrollRevealDemo /> */}
      <SectionDevider />
      <Contact />
      <div className="fixed bottom-4 right-24 md:right-16">
        <ModeToggle />
      </div>
    </motion.div>
  );
}
