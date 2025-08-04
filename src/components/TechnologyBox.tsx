import TechnologyProps from "@/types/Technology";
import React from "react";

export function TechnologyBox({ name, icon }: TechnologyProps) {
  const iconWithClasses = React.cloneElement(icon, {
    className: "text-2xl mb-1",
  });

  return (
    <div className="border rounded-lg flex flex-col items-center text-card-foreground shadow-sm px-4 py-3 ">
      {iconWithClasses}
      <h1 className="text-sm">{name}</h1>
    </div>
  );
}
