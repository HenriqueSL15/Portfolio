import ContactProps from "@/types/Contact";
import React from "react";

export function ContactBox({ name, icon, link }: ContactProps) {
  const iconWithClasses = React.cloneElement(icon, {
    className: "",
  });

  return (
    <a
      href={link}
      target={link !== "mailto:henrynyyls@gmail.com" && link ? "_blank" : ""}
      download={link.startsWith("/") ? true : false}
      className="flex gap-3 items-center justify-center border py-2 rounded-lg"
    >
      {iconWithClasses}
      <h1 className="font-montserrat">{name}</h1>
    </a>
  );
}
