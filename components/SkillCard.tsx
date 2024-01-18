import { PT_Sans } from "next/font/google";

type SkillCardProp = {
  title: string;
  skill: string;
};

const ptsans = PT_Sans({ subsets: ["latin"], weight: ["400"] });

const SkillCard = ({ title, skill }: SkillCardProp) => {
  const skills = skill.split(",");
  return (
    <div className=" bg-card-primary rounded-lg m-2 p-1 hover:bg-black-shade">
      <h1 className={`${ptsans.className} m-2 p-1 capitalize`}>{title} </h1>
      <div className=" flex flex-wrap p-3 m-1">
        {skills.map((item) => {
          return (
            <div key={item}>
              <p className=" p-1 m-2 border-2 rounded-md border-white text-sm h-fit justify-start">
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
