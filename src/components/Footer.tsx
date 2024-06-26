"use client";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
      className="footer"
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.25, duration: 0.5 },
      }}
    >
      <p>Copy writes reserved@2024</p>
      <p>Language | English</p>
    </motion.div>
  );
};
export default Footer;
