import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaCross } from "react-icons/fa6";
import { SiFiverr, SiFreelancer, SiUpwork } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
import { Poppins } from "next/font/google";

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
    url: "https://www.linkedin.com/in/arjun-yadav-4aa978261/",
    icon: <FaLinkedin />,
    color: "text-linkedIn-color",
  },
  {
    text: "Github",
    url: "https://github.com/Arjun149133",
    icon: <FaGithub />,
    color: "",
  },
  {
    text: "Twitter",
    url: "https://twitter.com/AArjunY",
    icon: <FaTwitter />,
    color: "text-twitter-color",
  },
];

const freelance: Socials[] = [
  {
    text: "Fiver",
    url: "",
    icon: <SiFiverr />,
    color: "text-fiver-color",
  },
  {
    text: "Freelancer",
    url: "",
    icon: <SiFreelancer />,
    color: "text-freelancer-color",
  },
  { text: "Upwork", url: "", icon: <SiUpwork />, color: "text-upwork-color" },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggleSidebar }) => {
  return (
    <aside
      className={`${
        isOpen ? "" : "hidden"
      } h-5/6 w-56 ml-10 mt-10 py-10 p-4 bg-card-primary md:flex flex-col justify-center items-center rounded-md fixed space-y-7 z-10`}
    >
      <div className=" flex justify-end text-xl md:hidden">
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
        <p className="flex self-start ml-5 pb-5 font-semibold text-insta-pink">
          freelancing
        </p>
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
