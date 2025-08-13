"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <div className="xl:min-w-1/3 xl:max-w-1/3 lg:min-w-2/4 lg:max-w-2/4 sm:min-w-7/10 sm:max-w-7/10 flex justify-between py-5">
      <h1 className={`font-bold text-2xl font-montserrat text-primary`}>
        HENRIQUE
      </h1>
      <ThemeToggle />
    </div>
  );
}
