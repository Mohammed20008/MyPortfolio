import { FaPaperPlane } from "react-icons/fa";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useSectionName } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { sendEmail } from "./SendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./ui/SubmitBtn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref, inView = 0.8 } = useSectionName("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="relative flex w-full flex-col"
      initial={{
        opacity: 0,
        y: -100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <h1 className="text-center text-gray-700">contact me on gmail </h1>
      <form
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("success");
        }}
        className="flex w-full flex-col space-y-4"
      >
        <input
          type="email"
          className="h-10 rounded bg-opacity-60 p-4 focus:outline-none dark:bg-gray-900"
          required
          name="email"
        />
        <textarea
          name="message"
          id=""
          className="h-40 rounded bg-gray-200 p-4 focus:outline-none dark:bg-gray-950"
          required
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};
export default Contact;
