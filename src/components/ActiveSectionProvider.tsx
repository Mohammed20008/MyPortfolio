"use client";
import { links } from "@/lib/data";
import {
  ReactNode,
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
type ActiveSectiontype = (typeof links)[number]["name"];
type valuetype = {
  ActiveSection: ActiveSectiontype;
  setActiveSection: Dispatch<SetStateAction<ActiveSectiontype>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<valuetype | null>(null);
const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
  const [ActiveSection, setActiveSection] = useState<ActiveSectiontype>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        ActiveSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};
export default ActiveSectionProvider;
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error("error");
  }
  return context;
}
