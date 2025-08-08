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
    <div className="min-w-1/3 max-w-1/3 flex flex-col gap-7">
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
          <h2 className="text-[#05df72] font-roboto">
            ✓ Disponível para trabalho
          </h2>
        </div>
      </div>

      {/* Sobre Mim */}
      <p className="text-primary font-roboto">
        Sou um{" "}
        <span className="inline-block relative">
          <motion.span
            initial={false}
            animate={{
              color: hovered ? "var(--color-greenText)" : "inherit",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            desenvolvedor fullstack criativo
          </motion.span>
          <motion.span
            initial={false}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-[2px] bg-greenText w-full"
            style={{ transformOrigin: "left" }}
          />
        </span>{" "}
        com{" "}
        <span className="inline-block relative">
          <motion.span
            initial={false}
            animate={{
              color: hovered ? "var(--color-greenText)" : "inherit",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            2 anos de experiência.
          </motion.span>
          <motion.span
            initial={false}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-[2px] bg-greenText w-full"
            style={{ transformOrigin: "left" }}
          />
        </span>{" "}
        Especializado na{" "}
        <span className="inline-block relative">
          <motion.span
            initial={false}
            animate={{
              color: hovered ? "var(--color-greenText)" : "inherit",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            criação de experiências de usuário envolventes
          </motion.span>

          <motion.span
            initial={false}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-[2px] bg-greenText w-full"
            style={{ transformOrigin: "left" }}
          />
        </span>{" "}
        com{" "}
        <span className="inline-block relative">
          <motion.span
            initial={false}
            animate={{
              color: hovered ? "var(--color-greenText)" : "inherit",
              // color: hovered ? "#05df72" : "inherit",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            grande atenção aos detalhes.
          </motion.span>
          <motion.span
            initial={false}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-[2px] bg-greenText w-full"
            style={{ transformOrigin: "left" }}
          />
        </span>
      </p>

      <ContactInfo />
    </div>
  );
}
