import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  description: string;
  img: string;
};

const projects: Project[] = [
  {
    title: "CvBuilder",
    description: "React, React Hooks, TailwindCss, ContextApi",
    img: "",
  },
  {
    title: "MemoryGame",
    description: "React, Context Api, Api Usage, TailwindCss",
    img: "",
  },
  {
    title: "Shopping Cart",
    description:
      "React, Vite, ContextApi, React Hooks, Comfy-Store Api, Redux-State Management, TailwindCss",
    img: "",
  },
  {
    title: "Library",
    description:
      "Backend using Nodejs, expressjs, mongodb, postman, pug-template-engine, Jwt Authentication",
    img: "",
  },
];

const ProjectsContainer = () => {
  return (
    <div>
      {projects.map((item, index) => {
        return <ProjectCard {...item} />;
      })}
    </div>
  );
};

export default ProjectsContainer;
