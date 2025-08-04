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
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript />,
    },
    {
      name: "React.js",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "PostgreeSQL",
      icon: <SiPostgresql />,
    },
  ];

  return (
    <div className="flex flex-col min-w-1/3 max-w-1/3">
      <h1 className="text-center font-semibold text-2xl mb-5 font-montserrat">
        Tecnologias
      </h1>
      <div className="grid grid-cols-4 w-full gap-2">
        {technologies.map((technology: TechnologyProps, i: number) => {
          return (
            <TechnologyBox
              key={i}
              name={technology.name}
              icon={technology.icon}
            />
          );
        })}
      </div>
    </div>
  );
}
