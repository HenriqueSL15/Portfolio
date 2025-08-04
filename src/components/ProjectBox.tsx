"use client";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import ProjectProps from "@/types/Project";

export function ProjectBox({
  imageUrl,
  imageAlt,
  title,
  description,
  techStack,
  demoLink,
  githubLink,
}: ProjectProps) {
  return (
    <div className="w-full border rounded-lg flex flex-col gap-5 p-5">
      <Image
        onClick={() => window.open(demoLink, "_blank")}
        className="rounded-lg cursor-pointer"
        src={imageUrl}
        width={1920}
        height={1080}
        alt={imageAlt}
      />
      <div className="flex flex-col gap-1">
        <h1 className="font-montserrat font-bold text-2xl text-foreground">
          {title}
        </h1>
        <p className="font-roboto text-muted-foreground">{description}</p>
      </div>
      <div className="flex gap-3">
        {techStack.map((tech: string, i: number) => (
          <h1
            key={i}
            className="font-roboto bg-techCard-background text-foreground px-2 py-1 rounded-full"
          >
            {tech}
          </h1>
        ))}
      </div>
      <div className="flex gap-3">
        <button
          className="flex items-center gap-2 font-semibold cursor-pointer border p-2 rounded-lg bg-black"
          onClick={() => window.open(demoLink, "_blank")}
        >
          <FaExternalLinkAlt />
          Demo
        </button>
        <button
          className="flex items-center gap-2 font-semibold cursor-pointer border p-2 rounded-lg bg-black"
          onClick={() => window.open(githubLink, "_blank")}
        >
          <FaGithub />
          Código
        </button>
      </div>
    </div>
  );
}
