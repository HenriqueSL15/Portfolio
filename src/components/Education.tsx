import { EducationBox } from "./EducationBox";

export function Education() {
  const educationInfo = [
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
    <div className="min-w-1/3 max-w-1/3 flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-5">Educação</h1>
      <div className="flex flex-col gap-3">
        {educationInfo.map((education, i) => {
          return <EducationBox key={i} {...education} />;
        })}
      </div>
    </div>
  );
}
