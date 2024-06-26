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
    <section
      ref={ref}
      id="home"
      className="mt-6 flex scroll-mt-[100rem] flex-col items-center justify-center space-y-4"
    >
      <div className="relative h-20 w-20 md:h-40 md:w-40">
        <div>
          <Image
            alt="logo"
            src="/profile.jpg"
            fill
            className="rounded-full border-4 border-white object-cover shadow-2xl shadow-black drop-shadow-2xl"
          />
        </div>

        <motion.span
          className="absolute bottom-0 right-0 text-xl md:text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          👋
        </motion.span>
      </div>
      <div className="w-2/3 space-y-4 text-center">
        <h1 className="bg-gradient-to-r from-yellow-200 to-slate-900 bg-clip-text text-2xl text-transparent">
          <TypewriterEffectDemo />
        </h1>
        {/* Buttons */}
        <div className="flex-col items-center justify-center space-x-4 space-y-4 font-semibold md:flex-row">
          <Button className="group rounded-full bg-gray-900 bg-gradient-to-r pb-1 backdrop-blur-xl transition ease-in-out hover:scale-110 dark:from-indigo-500 dark:to-purple-500 dark:text-black">
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
          <Button
            className="rounded-full bg-white bg-gradient-to-r pb-1 transition hover:scale-110 dark:from-indigo-500 dark:to-purple-500 dark:text-gray-950"
            variant="secondary"
          >
            Download Cv
          </Button>
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            {" "}
            <Link
              href="/"
              className=" rounded-full bg-white p-3 transition hover:scale-110 hover:text-gray-950 dark:bg-gray-950 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              <BsLinkedin />
            </Link>
            <Link
              href="/"
              className="hover:text-gray-950hover:text-gray-950 rounded-full bg-white p-3 transition hover:scale-110 dark:bg-gray-950 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              <BsGithub />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Intro;
