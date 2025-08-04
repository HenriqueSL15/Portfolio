"use client";

import { FaRegMoon } from "react-icons/fa";

export function Header() {
  return (
    <div className="w-1/3 flex justify-between py-5">
      <h1 className="font-bold text-2xl">HENRIQUE</h1>
      <FaRegMoon className="mr-10 cursor-pointer" size={20} />
    </div>
  );
}
