"use client";

import TechnologyProps from "@/types/Technology";
import React from "react";
import { motion } from "framer-motion";

export function TechnologyBox({ name, icon, color }: TechnologyProps) {
  const Icon = icon;

  const boxVariant = {
    hover: {
      scale: 1.05,
      backgroundColor: "#151515",
    },
  };

  const iconVariants = {
    hover: {
      y: -5,
      color: color,
    },
  };

  return (
    <motion.div
      variants={boxVariant}
      whileHover="hover"
      transition={{ duration: 0.1, ease: "easeInOut" }}
      className="border rounded-lg flex flex-col items-center text-card-foreground shadow-sm px-4 py-3 cursor-pointer"
    >
      <motion.div
        variants={iconVariants}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      >
        <Icon className="text-3xl mb-1" />
      </motion.div>

      <motion.h1 className="text-sm text-muted-foreground font-roboto">
        {name}
      </motion.h1>
    </motion.div>
  );
}
