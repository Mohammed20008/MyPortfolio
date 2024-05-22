import { ReactNode } from "react";

const SectionHeading = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-2xl capitalize font-medium mb-6 text-center">
      {children}
    </div>
  );
};
export default SectionHeading;
