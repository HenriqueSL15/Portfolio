"use client";

import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const [rotation, setRotation] = useState(0);
  const { isDark, toggleTheme } = useTheme();

  const handlerThemeToggle = () => {
    // Inicia rotação
    const newRotation = rotation + 360;
    setRotation(newRotation);

    // Troca o tema na metade da rotação (180°)
    setTimeout(() => {
      toggleTheme();
    }, 150);
  };

  return (
    <motion.div
      onClick={handlerThemeToggle}
      animate={{ rotate: rotation }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="mr-10 cursor-pointer "
    >
      {isDark ? <FaRegSun size={20} color="white" /> : <FaRegMoon size={20} />}
    </motion.div>
  );
}
