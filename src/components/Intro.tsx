"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { TypewriterEffectDemo } from "./TypeWriterIntro";
import { useSectionName } from "@/lib/hooks";
import { useActiveSectionContext } from "./ActiveSectionProvider";

const Intro = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionName("Home");

  return (
    <section ref={ref} id="home" className="introSection">
      <div className="relative h-40 w-40">
        <div>
          <Image
            alt="logo"
            src="/profile.jpg"
            fill
            className="rounded-full border-4 border-white object-cover shadow-2xl shadow-black drop-shadow-2xl"
          />
        </div>

        <motion.span
          className="absolute bottom-0 right-0 text-6xl md:text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          👋
        </motion.span>
      </div>
      <div className="space-y-4 text-center">
        <h1>
          <TypewriterEffectDemo />
        </h1>
        {/* Buttons */}
        <div className="flex-col items-center justify-center space-x-4 space-y-4 font-semibold md:flex-row">
          <Button className="contactButton group">
            <Link
              href="#contact"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here
            </Link>

            <span className="ml-1 text-xl text-gray-300 transition group-hover:ml-2 dark:text-black">
              <BsArrowRight />
            </span>
          </Button>
          <Button className="cvButton">Download Cv</Button>
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            {" "}
            <Link href="/" className="link">
              <BsLinkedin />
            </Link>
            <Link href="/" className="link">
              <BsGithub />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Intro;
