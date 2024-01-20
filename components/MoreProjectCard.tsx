import { Roboto, Lato } from "next/font/google";
import { FaGithub } from "react-icons/fa6";

type ProjectCardProp = {
  title: string;
  description: string;
  link: string;
};

const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });
const lato = Lato({ subsets: ["latin"], weight: ["100"] });

const MoreProjectCard = ({ title, description, link }: ProjectCardProp) => {
  return (
    <div className=" m-2 lg:w-56 md:min-h-fit bg-card-primary rounded-lg p-1 flex flex-col justify-center items-center transform transition-transform duration-300 hover:translate-y-1 cursor-pointer text-white ">
      <h2 className={`${roboto.className}  flex self-start p-1`}>{title}</h2>
      <p className={` text-xs w-full md:w-fit m-1 p-1`}>{description}</p>
      <a
        target="_blank"
        href={link}
        className=" flex items-center space-x-2  self-end p-1 m-1"
      >
        <p className=" text-sm">Git repository</p>
        <FaGithub className=" text-xl" />
      </a>
    </div>
  );
};

export default MoreProjectCard;
