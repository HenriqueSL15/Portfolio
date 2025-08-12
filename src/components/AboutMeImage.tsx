"use client";

import Image from "next/image";
import { useAnimation, easeInOut, motion } from "framer-motion";
import { useRef } from "react";

export function AboutMeImage({
  setHovered,
  hovered,
}: {
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
  hovered: boolean;
}) {
  const controls = useAnimation();
  const isAnimating = useRef(false);

  const radius = 65;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius;

  const handleMouseEnter = () => {
    if (isAnimating.current) return; // evita animar se já animando

    if (!hovered) {
      // Primeiro hover: anima preencher
      isAnimating.current = true;
      controls
        .start({
          strokeDashoffset: 0,
          transition: { duration: 1.5, ease: easeInOut },
        })
        .then(() => {
          isAnimating.current = false;
          setHovered(true);
        });
    } else {
      // Segundo hover (quando já está preenchido): anima desfazer
      isAnimating.current = true;
      controls
        .start({
          strokeDashoffset: circumference,
          transition: { duration: 0.8, ease: easeInOut },
        })
        .then(() => {
          isAnimating.current = false;
          setHovered(false);
        });
    }
  };

  return (
    <div
      className="relative w-[124px] h-[124px]"
      onMouseEnter={handleMouseEnter}
    >
      {/* Borda SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 140 140"
      >
        {/* Borda cinza estática */}
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="transparent"
          stroke="#555"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx="70"
          cy="70"
          r={radius}
          fill="transparent"
          stroke="#05df72"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={controls}
        />
      </svg>

      {/* Avatar */}
      <Image
        src="/henrique_small.jpeg"
        alt="Henrique"
        width={104}
        height={104}
        className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
