"use client";

import EducationProps from "@/types/Education";
import { SlGraduation } from "react-icons/sl";
import { motion } from "framer-motion";

export function EducationBox({
  title,
  description,
  dates,
  status,
}: EducationProps) {
  const boxVariant = {
    hover: {
      scale: 1.05,
    },
  };

  const statusVariant = {
    hover: {
      rotate: 5,
    },
  };

  return (
    <motion.div
      variants={boxVariant}
      whileHover="hover"
      transition={{ duration: 0.1, ease: "easeInOut" }}
      className="w-full border flex p-5 rounded-lg gap-5 cursor-pointer"
    >
      <SlGraduation className="bg-portfolio-subtle p-2 rounded-xl" size={50} />

      <div className="flex flex-col w-full">
        <h1 className="font-semibold font-montserrat">{title}</h1>
        <p className="text-muted-foreground font-roboto">{description}</p>
        <div className="mt-3 w-full flex justify-between items-center">
          <p className="text-sm text-muted-foreground font-roboto">
            {dates[0]} - {dates[1]}
          </p>
          <motion.h1
            variants={statusVariant}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="text-sm bg-green-500/20 text-green-400 p-2 rounded-lg font-roboto"
          >
            {status}
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}
