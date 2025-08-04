import Image from "next/image";
import { ContactInfo } from "./ContactInfo";

export function AboutMe() {
  return (
    <div className="min-w-1/3 max-w-1/3 flex flex-col gap-7">
      <div className="flex gap-3 justify-start w-full">
        {/* Foto do Henrique */}
        <div className="space-y-3 flex flex-col justify-center">
          <Image
            src="/henrique_small.jpeg"
            alt="Foto do Henrique"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {/* Introdução */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl w-auto font-semibold font-montserrat">
            Opa, sou o Henrique! <span>👋</span>
          </h1>
          <h2 className="text-green-400 font-roboto">
            ✓ Disponível para trabalho
          </h2>
        </div>
      </div>

      {/* Sobre Mim */}
      <p className="text-foreground font-roboto">
        Sou um desenvolvedor fullstack criativo com 2+ anos de experiência.
        Especializado na criação de experiências de usuário envolventes com
        grande atenção aos detalhes.
      </p>

      <ContactInfo />
    </div>
  );
}
