"use client";

import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { Technologies } from "@/components/Technologies";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";

import { useTheme } from "@/contexts/ThemeContext";
// bg-[linear-gradient(to_bottom,_#101b15_0%,_#0a0a0a_25%)]
export default function Home() {
  return (
    <div
      className={`min-h-screen flex flex-col gap-20 pb-10 items-center w-full`}
    >
      <Header />
      <AboutMe />
      <Technologies />
      <Education />
      <Projects />
    </div>
  );
}
