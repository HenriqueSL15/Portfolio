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
    {
      imageUrl: "/byteland_preview.png",
      imageAlt: "Prévia do Projeto ByteLand",
      title: "ByteLand",
      description:
        "Rede Social onde é possível fazer publicações, comentar nas mesmas, ter a sua própria página com suas publicações além de fazer amigos.",
      techStack: ["React.js", "Node.js", "MongoDB", "TailwindCSS"],
      demoLink: "https://byte-land.netlify.app/",
      githubLink: "https://github.com/HenriqueSL15/Byte-Land-Rede-social",
    },
  ];

  return (
    <div className="xl:min-w-1/3 xl:max-w-1/3 lg:min-w-2/4 lg:max-w-2/4 sm:min-w-7/10 sm:max-w-7/10">
      <h1 className=" text-2xl font-semibold mb-5 font-montserrat text-center text-primary">
        Projetos
      </h1>
      <div className="flex flex-col gap-3">
        {projectsInfo.map((project, i: number) => (
          <ProjectBox key={i} {...project} />
        ))}
      </div>
    </div>
  );
}
