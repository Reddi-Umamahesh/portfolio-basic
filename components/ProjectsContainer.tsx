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
    img: "/cvbuilder.webp",
  },
  {
    title: "MemoryGame",
    description: "React, Context Api, Api Usage, TailwindCss",
    img: "/poke.jpg",
  },
  {
    title: "Shopping Cart",
    description:
      "React, Vite, ContextApi, React Hooks, Comfy-Store Api, Redux-State Management, TailwindCss",
    img: "/shoppingKart.avif",
  },
  {
    title: "Library",
    description:
      "Backend Restful using Nodejs, expressjs, mongodb, postman, pug-template-engine, Jwt Authentication",
    img: "/library.jpeg",
  },
];

const ProjectsContainer = () => {
  return (
    <div className=" text-white m-2 p-2 gap-2 flex flex-col">
      <h2 className=" text-xl">Projects</h2>
      <div className=" flex flex-wrap p-2 gap-8 justify-between">
        {projects.map((item, index) => {
          return <ProjectCard {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsContainer;
