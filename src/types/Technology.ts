import { JSX } from "react";

export default interface TechnologyProps {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}
