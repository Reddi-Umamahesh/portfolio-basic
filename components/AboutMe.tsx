import { Noto_Sans } from "next/font/google";

const noto = Noto_Sans({subsets: ['greek'], weight: ['500']})

const AboutMe = ({ title, content }: { title: string; content: string; }) => {
  return (
    <div className="">
      <ul>
        <li>
          <h3 className={` my-1 ${noto.className} text-upwork-color`}>{title}:</h3>
          <p className=" p-1">{content}</p>
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
