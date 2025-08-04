import ContactProps from "@/types/Contact";
import { FaFileLines, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ContactBox } from "./ContactBox";

export function ContactInfo() {
  const contactInfo = [
    {
      name: "Currículo",
      icon: <FaFileLines />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      name: "Email",
      icon: <MdEmail />,
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
