"use client";
import { links } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveSectionContext } from "./ActiveSectionProvider";

const Header = () => {
  const { ActiveSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      //   transition={{ delay: 0.5, duration: 0.5 }}
    >
      <nav className="flex items-center space-x-8">
        <ul className="dar:text-gray-300 flex flex-wrap justify-center md:space-x-6">
          {links.map((link, index) => (
            <Link
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
              href={link.hash}
              key={link.hash}
              className={cn(
                "relative flex items-center px-2 py-1 font-medium transition hover:text-gray-950 dark:hover:text-gray-50",
                {
                  "font-medium dark:text-gray-300": ActiveSection === link.name,
                },
              )}
            >
              {link.name === ActiveSection && (
                <motion.span
                  className="absolute inset-0 -z-10 rounded-full bg-indigo-100 dark:bg-gray-800"
                  layoutId="ActiveSection"
                ></motion.span>
              )}
              {link.name}
            </Link>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};
export default Header;
