/* eslint-disable react/no-unescaped-entities */
"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Towards",
      className: "",
    },
    {
      text: "awesome",
      className: "",
    },
    {
      text: "apps",
    },
    {
      text: "with",
      className: "",
    },
    {
      text: "React.js",
      className:
        "text-blue-700 dark:text-blue-400 underline text-3xl md:text-4xl",
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
