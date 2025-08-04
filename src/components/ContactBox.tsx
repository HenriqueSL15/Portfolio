import ContactProps from "@/types/Contact";
import React from "react";

export function ContactBox({ name, icon }: ContactProps) {
  const iconWithClasses = React.cloneElement(icon, {
    className: "",
  });

  return (
    <button className="flex gap-3 items-center justify-center border py-2 rounded-lg">
      {iconWithClasses}
      <h1>{name}</h1>
    </button>
  );
}
