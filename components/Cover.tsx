import { Source_Code_Pro } from "next/font/google";
import ProfilePic from "./ProfilePic";

const source = Source_Code_Pro({ subsets: ["latin"], weight: ["800"] });
const Cover = () => {
  return (
    <div className="flex justify-evenly lg:justify-start bg-[url('/cover-bg.png')] p-2 rounded-lg bg-no-repeat bg-cover">
      <div className="flex justify-center">
        <div className="flex justify-center">
          <ProfilePic />
        </div>
        <div className=" flex items-center ml-7">
          <div className=" mx-4">
            <p className={`${source.className} text-3xl text-black-color`}>
              Arjun Yadav
            </p>
            <p className=" font-mono text-xs">Developer</p>
          </div>
        </div>
      </div>
      {/* <button className="hidden md:flex justify-end items-center border-4 border-white h-fit mt-12 p-2 rounded-xl text-insta-pink font-bold bg-btn-primary text-sm">
        contact me
      </button> */}
    </div>
  );
};

export default Cover;
