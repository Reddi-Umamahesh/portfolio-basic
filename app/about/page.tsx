import AboutMe from "@/components/AboutMe";
import { Metadata } from "next";
import { Noto_Sans, Merriweather, Nunito } from "next/font/google";
import { IoMailOpenOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "About | Arjun",
};

const noto = Noto_Sans({ subsets: ["greek"] });
const merri = Merriweather({ subsets: ["latin"], weight: ["300"] });
const nuni = Nunito({ subsets: ["latin"], weight: "300" });

const About = () => {
  return (
    <section className=" flex justify-center items-center">
      <div className=" flex justify-center m-1 p-1">
        <div
          className={`lg:ml-72 m-2 mt-14 bg-card-primary rounded-lg text-white flex flex-col flex-wrap justify-center p-7 w-3/4 ${nuni.className} text-lg text-wrap`}
        >
          <h1
            className={`${noto.className} text-2xl self-center text-twitter-color font-bold m-2 p-1`}
          >
            About Me
          </h1>
          <div className={` my-2 leading-relaxed text-lg self-center`}>
            Greetings! I am a passionate and dedicated web developer with a
            solid year of experience in Full Stack Development. My expertise
            lies in the MERN (MongoDB, Express.js, React, Node.js) stack,
            Next.js, and MySQL. I find immense joy in turning ideas into robust
            and user-friendly web applications.
          </div>
          <div className=" my-2">
            <h2
              className={`my-2 py-2 text-xl text-insta-pink font-semibold ${merri.className} border-b border-black-color`}
            >
              Why Word With Me?
            </h2>
            <div>
              <AboutMe
                title="Client Centric Approach"
                content=" I prioritize understanding the unique needs of each client, ensuring that the solutions I provide align perfectly with their goals."
              />
              <AboutMe
                title="Continuous Learning"
                content="The dynamic nature of web development motivates me to stay updated with the latest technologies. I believe in continuous learning to bring cutting-edge solutions to my projects."
              />
              <AboutMe
                title="AI Integration"
                content=" I harness the power of AI to boost productivity, automate tasks, and enhance user interactions. This ensures that my projects not only meet current standards but also incorporate forward-thinking solutions."
              />
            </div>
          </div>
          <div className=" my-2">
            <h2
              className={`py-2 text-xl text-yellow font-semibold ${merri.className} border-b border-black-color`}
            >
              Professional Journey
            </h2>
            <p className=" p-1">
              My journey in Full Stack Development began a year ago, and since
              then, ve been dedicated to staying at the forefront of technology
              trends. ve successfully delivered projects that not only meet but
              exceed client expectations, demonstrating my commitment to quality
              and innovation.
            </p>
          </div>
          <div className=" my-2">
            <h2
              className={`py-2 text-xl text-linkedIn-color border-b border-black-color font-semibold ${merri.className}`}
            >
              Lets Collaborate
            </h2>
            <p className=" p-1">
              I am eager to take on new challenges and contribute my skills to
              your project. Whether you have a specific idea in mind or need
              guidance on technology choices, I am here to bring your vision to
              life.
            </p>
          </div>
          <div className="my-1 p-4 text-center flex flex-col items-center">
            <p
              className={`text-xl ${merri.className} text-insta-pink font-semibold`}
            >
              Feel free to reach out, and les create something extraordinary
              together!
            </p>
            <div className=" mt-2 flex items-center gap-2">
              <IoMailOpenOutline className=" text-xl" />
              <p className=" italic">arjun149133@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
