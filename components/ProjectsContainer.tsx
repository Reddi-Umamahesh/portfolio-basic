import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  description: string;
  img: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Shopping Cart",
    description:
      "React, Vite, ContextApi, React Hooks, Comfy-Store Api, Redux-State Management, TailwindCss",
    img: "/shoppingKart.avif",
    link: "https://github.com/Arjun149133/ShopKart-vite"
  },
  {
    title: "CvBuilder",
    description: "React, React Hooks, TailwindCss, ContextApi",
    img: "/cvbuilder.webp",
    link: "https://github.com/Arjun149133/CvBuilder-react-vite"
  },
  {
    title: "MemoryGame",
    description: "React, Context Api, Api Usage, TailwindCss",
    img: "/poke.jpg",
    link: "https://github.com/Arjun149133/FinalMemoryGame"
  },
  {
    title: "Library",
    description:
      "Backend Restful using Nodejs, expressjs, mongodb, postman, pug-template-engine, Jwt Authentication",
    img: "/library.jpeg",
    link: ""
  },
];

const ProjectsContainer = () => {
  return (
    <div className=" text-white m-2 p-2 gap-2 flex flex-col">
      <h2 className=" text-xl">Projects</h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 p-2 gap-8 justify-evenly">
        {projects.map((item, index) => {
          return <ProjectCard {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsContainer;
