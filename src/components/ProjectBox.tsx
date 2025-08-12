"use client";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import ProjectProps from "@/types/Project";
import { motion } from "framer-motion";

export function ProjectBox({
  imageUrl,
  imageAlt,
  title,
  description,
  techStack,
  demoLink,
  githubLink,
}: ProjectProps) {
  const imageVariants = {
    hover: {
      scale: 1.03,
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
    },
  };

  return (
    <div className="w-full border border-border rounded-lg flex flex-col gap-5 p-5 ">
      <motion.div
        variants={imageVariants}
        whileHover={"hover"}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Image
          onClick={() => window.open(demoLink, "_blank")}
          className="rounded-lg cursor-pointer"
          src={imageUrl}
          width={1920}
          height={1080}
          alt={imageAlt}
        />
      </motion.div>
      <div className="flex flex-col gap-1">
        <h1 className="font-montserrat font-bold text-2xl text-primary">
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
        <motion.button
          variants={buttonVariants}
          whileHover={"hover"}
          className="flex items-center gap-2 font-semibold cursor-pointer border border-border p-2 rounded-lg  text-primary"
          onClick={() => window.open(demoLink, "_blank")}
        >
          <FaExternalLinkAlt />
          Demo
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover={"hover"}
          className="flex items-center gap-2 font-semibold cursor-pointer border border-border p-2 rounded-lg  text-primary"
          onClick={() => window.open(githubLink, "_blank")}
        >
          <FaGithub />
          Código
        </motion.button>
      </div>
    </div>
  );
}
