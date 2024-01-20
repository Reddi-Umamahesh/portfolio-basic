import SkillCard from "./SkillCard";

type Skill = {
  frontend: string;
  backend: string;
  database: string;
  miscellaneous: string;
};

const skills: Skill = {
  frontend: "HTML, CSS, Tailwind, JavaScript, TypeScript, React Js, Next Js 13, Redux",
  backend: "Node Js, Express Js, Next Auth, JWT",
  database: "MongoDB, MySql",
  miscellaneous: "GIT, WordPress, Wix, ChatGpt",
};

const SkillContainer = () => {
  const { frontend, backend, database, miscellaneous } = skills;
  return (
    <div className=" text-white m-2 p-2 gap-2 flex flex-col">
      <h2 className=" text-xl">Skills</h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 p-2 gap-8 justify-evenly">
        <SkillCard title="frontend" skill={frontend} />
        <SkillCard title="backend" skill={backend} />
        <SkillCard title="database" skill={database} />
        <SkillCard title="miscellaneous" skill={miscellaneous} />
      </div>
    </div>
  );
};

export default SkillContainer;
