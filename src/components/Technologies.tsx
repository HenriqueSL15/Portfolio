"use client";

import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

import { TechnologyBox } from "./TechnologyBox";
import TechnologyProps from "@/types/Technology";

export function Technologies() {
  const technologies: TechnologyProps[] = [
    {
      name: "HTML 5",
      icon: FaHtml5,
      color: "#f06529",
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
      color: "#2965f1",
    },
    {
      name: "Typescript",
      icon: SiTypescript,
      color: "#007acc",
    },
    {
      name: "React.js",
      icon: FaReact,
      color: "#00d8ff",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#fafafa",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#38bdf8",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#4da84b",
    },
    {
      name: "PostgreeSQL",
      icon: SiPostgresql,
      color: "#007acc",
    },
  ];

  return (
    <div className="flex flex-col min-w-1/3 max-w-1/3">
      <h1 className="text-center font-semibold text-2xl mb-5 font-montserrat text-primary">
        Tecnologias
      </h1>
      <div className="grid grid-cols-4 w-full gap-2">
        {technologies.map((technology: TechnologyProps, i: number) => {
          return (
            <TechnologyBox
              key={i}
              name={technology.name}
              icon={technology.icon}
              color={technology.color}
            />
          );
        })}
      </div>
    </div>
  );
}
