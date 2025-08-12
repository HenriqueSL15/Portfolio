"use client";

import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { Technologies } from "@/components/Technologies";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";

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
