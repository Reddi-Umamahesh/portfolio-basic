import MoreProjectCard from "./MoreProjectCard";

type Project = {
  title: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Goal App",
    description:
      "Nodejs, express, JWT, postman, ReactJs, GoogleOauth-2, tailwind ",
    link: "https://github.com/Arjun149133/MERN-goalApp",
  },
  {
    title: "NextJs Business App",
    description: "Nextjs-13, TypeScript, tailwindcss, Redux",
    link: "https://github.com/Arjun149133/Nextjs-App",
  },
];

const MoreProjects = () => {
  return (
    <div className=" text-white m-2 p-2 gap-2 flex flex-col">
      <h2 className=" text-xl">More Projects</h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 p-2 gap-8 justify-evenly">
        {projects.map((item, index) => {
          return <MoreProjectCard {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default MoreProjects;
