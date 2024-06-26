import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";
import { Button } from "./button";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="group w-fit rounded-full bg-gradient-to-r pb-1 dark:from-indigo-500 dark:to-purple-500 dark:text-gray-300"
      disabled={pending}
    >
      {pending ? (
        <div className=" h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit
          <span className="ml-2 text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white dark:text-white">
            <FaPaperPlane />
          </span>
        </>
      )}
    </Button>
  );
};
export default SubmitBtn;
