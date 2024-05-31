/* eslint-disable react/no-unescaped-entities */
"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Hi",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center ">
      <p className="mb-10 text-base text-neutral-600  dark:text-neutral-200">
        Let's Build Together! ✨
      </p>
      <TypewriterEffect words={words} className="-mt-8" />
    </div>
  );
}
