/* eslint-disable react/no-unescaped-entities */
"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Towards",
      className: "text-indigo-900 dark:text-indigo-300",
    },
    {
      text: "awesome",
      className: "text-green-600",
    },
    {
      text: "apps",
    },
    {
      text: "with",
      className: " text-blue-600",
    },
    {
      text: "React.js",
      className: "text-blue-900 dark:text-blue-900 underline",
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
