"use client";

import { ContactInfo } from "./ContactInfo";
import { AboutMeImage } from "./AboutMeImage";
import { useState } from "react";
import { motion, easeInOut } from "framer-motion";

export function AboutMe() {
  const [hovered, setHovered] = useState(false);

  const emojiVariants = {
    rest: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.3, ease: easeInOut },
    },
    hover: {
      rotate: [0, 45, 0, 45, 0, 45, 0],
      scale: 1.5,
      transition: {
        rotate: { duration: 2, ease: easeInOut },
        scale: { duration: 0.2, ease: easeInOut },
      },
    },
  };

  return (
    <div className="xl:min-w-1/3 xl:max-w-1/3 lg:min-w-2/4 lg:max-w-2/4 sm:min-w-7/10 sm:max-w-7/10  flex flex-col gap-7">
      <div className="flex gap-3 justify-start w-full">
        <AboutMeImage hovered={hovered} setHovered={setHovered} />
        {/* Introdução */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl w-auto font-semibold font-montserrat text-primary">
            Opa, sou o Henrique!{" "}
            <motion.span
              variants={emojiVariants}
              initial="rest"
              whileHover="hover"
              transition={{ duration: 2, ease: "easeInOut" }}
              className="inline-block"
            >
              👋
            </motion.span>
          </h1>
          <h2 className="text-primary font-roboto">
            <span className="text-[#05df72] text-xl">✓</span> Disponível para
            trabalho
          </h2>
        </div>
      </div>

      {/* Sobre Mim */}
      <p className="text-primary font-roboto">
        Sou um{" "}
        <span className="inline-block relative ">
          <span className="relative z-10">
            desenvolvedor fullstack criativo
          </span>
          <motion.span
            initial={false}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute bottom-1 left-0 h-[20px] bg-aboutMeBackground w-full"
            style={{ transformOrigin: "left" }}
          />
        </span>{" "}
        com{" "}
        <span className="inline-block relative">
          <span className="relative z-10">2 anos de experiência.</span>
          <motion.span
            initial={false}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute bottom-1 left-0 h-[20px] bg-aboutMeBackground w-full"
            style={{ transformOrigin: "left" }}
          />
        </span>{" "}
        Especializado em{" "}
        <span className="inline-block relative">
          <span className="relative z-10">desenvolvimento web full-stack</span>

          <motion.span
            initial={false}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute bottom-1 left-0 h-[20px] bg-aboutMeBackground w-full"
            style={{ transformOrigin: "left" }}
          />
        </span>{" "}
        com{" "}
        <span className="inline-block relative">
          <span className="relative z-10">grande atenção aos detalhes.</span>
          <motion.span
            initial={false}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute bottom-1 left-0 h-[20px] bg-aboutMeBackground w-full"
            style={{ transformOrigin: "left" }}
          />
        </span>
      </p>

      <ContactInfo />
    </div>
  );
}
