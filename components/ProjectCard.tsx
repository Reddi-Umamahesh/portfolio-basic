import Image from "next/image";
import { Roboto, Lato } from "next/font/google";
import {FaGithub} from 'react-icons/fa6'

type ProjectCardProp = {
  title: string;
  description: string;
  img: string;
};

const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });
const lato = Lato({ subsets: ["latin"], weight: ["100"] });

const ProjectCard = ({ title, description, img }: ProjectCardProp) => {
  return (
    <div className=" m-2 lg:w-56 md:min-h-fit bg-white rounded-lg p-1 flex flex-col justify-center items-center transform transition-transform duration-300 hover:translate-y-1 cursor-pointer">
      <Image
        src={img}
        alt="projectImg"
        height={300}
        width={300}
        className=" h-52 w-full lg:w-56 md:h-32 rounded-lg"
      />
      <h2 className={`${roboto.className} text-black-color flex self-start p-1`}>
        {title}
      </h2>
      <p className={`text-black-color  text-xs w-full md:w-fit m-1 p-1`}>{description}</p>
      <div className=" flex items-center space-x-2 text-btn-secondary self-end p-1 m-1">
        <p className=" text-sm">Git repository</p>
        <FaGithub className=" text-xl" />
      </div>
    </div>
  );
};

export default ProjectCard;
