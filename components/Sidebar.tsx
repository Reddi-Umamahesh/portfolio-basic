import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaCross } from "react-icons/fa6";
import { SiFiverr, SiFreelancer, SiUpwork } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
import { Poppins } from "next/font/google";
import { IoLogoVercel } from "react-icons/io5";
type Socials = {
  text: string;
  url: string;
  icon: React.ReactNode;
  color: string;
};

type SidebarProps = {
  isOpen: boolean;
  onToggleSidebar: () => void;
};

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const socials: Socials[] = [
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/umamahesh-reddi/",
    icon: <FaLinkedin />,
    color: "text-linkedIn-color",
  },
  {
    text: "Github",
    url: "https://github.com/Reddi-Umamahesh",
    icon: <FaGithub />,
    color: "",
  },
  {
    text: "Vercel",
    url: "https://vercel.com/reddiumamaheshs-projects",
    icon: <IoLogoVercel />,
    color: "text-twitter-color",
  },
];

const freelance: Socials[] = [];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggleSidebar }) => {
  return (
    <aside
      className={`${
        isOpen ? "" : "hidden"
      } md:h-5/6 max-h-screen w-56 ml-10 mt-14 py-10 p-4 bg-card-primary lg:flex flex-col justify-center items-center rounded-md fixed space-y-7 z-10 text-white`}
    >
      <div className=" flex justify-end text-xl lg:hidden">
        <button onClick={onToggleSidebar}>
          <IoMdClose />
        </button>
      </div>
      <div className=" flex flex-col items-center">
        <p className="flex self-start pb-5 font-semibold text-insta-pink ml-5">
          Socials
        </p>
        {socials.map((item, index) => {
          const { text, url, icon, color } = item;
          return (
            <div
              key={index}
              className=" flex gap-4 items-center pb-5 transform transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={` flex self-start pt-2 text-lg ${color} font-bold`}
              >
                {icon}
              </div>
              <a
                href={url}
                target="_blank"
                className={`flex self-start pt-1 ${poppins.className} `}
              >
                {text}
              </a>
            </div>
          );
        })}
      </div>
      <div className=" flex flex-col items-center">
        <p className="flex self-start ml-5 pb-5 font-semibold text-insta-pink"></p>
        {freelance.map((item, index) => {
          const { text, url, icon, color } = item;
          return (
            <div
              key={index}
              className=" flex gap-4 justify-evenly items-center pb-5 transform transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={` flex self-start pt-2 text-xl ${color} font-bold`}
              >
                {icon}
              </div>
              <a
                href={url}
                target="_blank"
                className={`flex self-start pt-1 ${poppins.className} `}
              >
                {text}
              </a>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
