import ContactProps from "@/types/Contact";
import { FaFileLines, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ContactBox } from "./ContactBox";

export function ContactInfo() {
  const contactInfo = [
    {
      name: "Currículo",
      icon: <FaFileLines />,
      link: "/curriculo.pdf",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/HenriqueSL15",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/henrique-s-82b58736b",
    },
    {
      name: "Email",
      icon: <MdEmail />,
      link: "mailto:henrynyyls@gmail.com",
    },
  ];

  return (
    <div className="w-full grid grid-cols-4 gap-2">
      {contactInfo.map((contact: ContactProps, i: number) => {
        return <ContactBox key={i} {...contact} />;
      })}
    </div>
  );
}
