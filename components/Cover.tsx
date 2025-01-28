import { Source_Code_Pro } from "next/font/google";
import ProfilePic from "./ProfilePic";
import TextReveal from "./TextReveal";

const source = Source_Code_Pro({ subsets: ["latin"], weight: ["800"] });

const Cover = () => {
  return (
    <div className="flex justify-between items-center bg-card-primary p-2 rounded-lg bg-no-repeat bg-cover text-white h-24">
      <div className="flex justify-center ml-7">
        <div className="mx-4">
          <p className={`${source.className} text-3xl`}>
            {/* <TextReveal text="Umamahesh" /> */}
            Umamahesh
          </p>
          <p className="font-mono text-xs">Developer</p>
        </div>
      </div>

      <div className="flex items-center mr-7">
        <img
          src="/ProfilePic.png" 
          alt="Profile"
          className="w-16 h-16 rounded-full border-4 border-white"
        />
      </div>
    </div>
  );
};

export default Cover;
