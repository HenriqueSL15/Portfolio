"use client";

import TechnologyProps from "@/types/Technology";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export function TechnologyBox({ name, icon, color }: TechnologyProps) {
  const Icon = icon;
  const { isDark } = useTheme();

  const boxVariant = {
    hover: {
      scale: 1.05,
      backgroundColor: isDark ? "var(--color-techCard-background)" : "",
    },
  };

  const iconVariants = {
    hover: {
      y: -5,
      color: color !== "#fafafa" ? color : isDark ? "white" : "black",
    },
  };

  return (
    <motion.div
      variants={boxVariant}
      whileHover="hover"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="border border-border rounded-lg flex flex-col items-center shadow-sm px-4 py-3 cursor-pointer "
    >
      <motion.div
        variants={iconVariants}
        initial={{ color: "var(--color-primary)" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Icon className="text-3xl mb-1" />
      </motion.div>

      <motion.h1 className="text-sm text-muted-foreground font-roboto">
        {name}
      </motion.h1>
    </motion.div>
  );
}
