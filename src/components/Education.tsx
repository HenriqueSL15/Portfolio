import EducationProps from "@/types/Education";
import { EducationBox } from "./EducationBox";

export function Education() {
  const educationInfo: EducationProps[] = [
    {
      title: "Universidade de Brasília (UnB)",
      description: "Bacharelado em Engenharia de Software",
      dates: [2025, 2030],
      status: "Em andamento",
    },
    {
      title: "ETEC Coronel Raphael Brandão",
      description: "Ensino Médio Integrado com Desenvolvimento de Sistemas",
      dates: [2022, 2024],
      status: "Concluída",
    },
  ];

  return (
    <div className="flex flex-col xl:min-w-1/3 xl:max-w-1/3 lg:min-w-2/4 lg:max-w-2/4 sm:min-w-7/10 sm:max-w-7/10">
      <h1 className="text-2xl font-semibold mb-5 font-montserrat text-primary text-center">
        Educação
      </h1>
      <div className="flex flex-col gap-3">
        {educationInfo.map((education: EducationProps, i: number) => {
          return <EducationBox key={i} {...education} />;
        })}
      </div>
    </div>
  );
}
