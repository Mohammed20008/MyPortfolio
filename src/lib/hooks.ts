"use client";
import { useActiveSectionContext } from "@/components/ActiveSectionProvider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export const useSectionName = (SectionName: SectionName, threshold = 0.75) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(SectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, SectionName]);
  return {
    ref,
    inView,
  };
};
