import { ProjectBox } from "./ProjectBox";

export function Projects() {
  const projectsInfo = [
    {
      imageUrl: "/fintrack_preview.png",
      imageAlt: "Prévia do Projeto Fintrack",
      title: "Fintrack",
      description:
        "Plataforma para fazer a gestão das suas finanças pessoais com histórico de transações, gráficos exibindo receitas/despesas de acordo com os meses, orçamentos, economias e mais.",
      techStack: ["React.js", "Node.js", "PostgreSQL", "TailwindCSS"],
      demoLink: "https://fintrackbr.netlify.app/",
      githubLink:
        "https://github.com/HenriqueSL15/FinTrack-Site-de-analise-financeira",
    },
  ];

  return (
    <div className="min-w-1/3 max-w-1/3">
      <h1 className=" text-2xl font-semibold mb-5 font-montserrat text-center">
        Projetos
      </h1>
      {projectsInfo.map((project, i: number) => (
        <ProjectBox key={i} {...project} />
      ))}
    </div>
  );
}
