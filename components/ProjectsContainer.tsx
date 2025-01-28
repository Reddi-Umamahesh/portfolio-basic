import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  description: string;
  img: string;
  link: string;
  git: string;
};

const projects: Project[] = [
  {
    title: "Syncpick",
    description:
      "Urban Clamp CLone , Express ,  MongoDB , MVC frame work , EJS ,Bootstrap , Mapbox",
    img: "/syncpick.jpeg",
    link: "https://syncpick.onrender.com/listings",
    git: "https://github.com/Reddi-Umamahesh/Syncpick",
  },
  {
    title: "KnightsChess",
    description:
      "React ,Express.js , Websockets , Postgres , Prisma ,Shandcn React Hooks, TailwindCss",
    img: "/project.png",
    link: "https://github.com/Reddi-Umamahesh/KnightsChess",
    git: "",
  },
  {
    title: "BattleShip",
    description: "HTML , CSS , Javascript",
    img: "/bs2.png",

    link: "https://reddi-umamahesh.github.io/Battleship/",
    git: "https://github.com/Reddi-Umamahesh/Battleship",
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
