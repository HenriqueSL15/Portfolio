"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <div className="w-1/3 flex justify-between py-5">
      <h1 className={`font-bold text-2xl font-montserrat text-primary`}>
        HENRIQUE
      </h1>
      <ThemeToggle />
    </div>
  );
}
