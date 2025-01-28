import AboutMe from "@/components/AboutMe";
import { Metadata } from "next";
import { Noto_Sans, Merriweather, Nunito } from "next/font/google";
import { IoMailOpenOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "About | Umamahesh",
};


const noto = Noto_Sans({ subsets: ["greek"] });
const merri = Merriweather({ subsets: ["latin"], weight: ["300"] });
const nuni = Nunito({ subsets: ["latin"], weight: "300" });

const About = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex justify-center m-1 p-2 text-sm">
        <div
          className={`lg:ml-72 m-2 mt-14 bg-card-primary rounded-lg text-white flex flex-col flex-wrap justify-center p-7 w-3/4 ${nuni.className} text-sm lg:text-lg text-wrap`}
        >
          <h1
            className={`${noto.className} text-2xl self-center text-twitter-color font-bold m-2 p-1`}
          >
            About Me
          </h1>
          <div className={`my-2 leading-relaxed self-center`}>
            Hello! I am Uma Maheshwara Rao Reddi, a passionate and dedicated
            B.Tech student specializing in Artificial Intelligence and Machine
            Learning. With a solid foundation in web development, I specialize
            in the MERN (MongoDB, Express.js, React, Node.js) stack, databases
            like PostgreSQL and MongoDB, and DevOps tools like Docker, Git, and
            AWS. My goal is to transform ideas into robust, scalable, and
            user-friendly web applications.
          </div>
          <div className="my-2">
            <h2
              className={`my-2 py-2 text-lg lg:text-xl text-insta-pink font-semibold ${merri.className} border-b border-black-color`}
            >
              Why Work With Me?
            </h2>
            <div>
              <AboutMe
                title="Client-Centric Approach"
                content="I prioritize understanding the unique needs of each client, ensuring that the solutions I provide align perfectly with their goals."
              />
              <AboutMe
                title="Continuous Learning"
                content="The dynamic nature of technology motivates me to stay updated with the latest advancements, enabling me to deliver cutting-edge solutions."
              />
              <AboutMe
                title="AI Integration"
                content="I leverage AI to enhance productivity, automate tasks, and create impactful user experiences, bringing future-ready solutions to every project."
              />
            </div>
          </div>
          <div className="my-2 text-sm lg:text-lg">
            <h2
              className={`py-2 text-lg lg:text-xl text-yellow font-semibold ${merri.className} border-b border-black-color`}
            >
              Professional Journey
            </h2>
            <p className="p-1">
              My journey in web development has been marked by impactful
              contributions, including mentoring 5000+ developers and solving
              over 300 technical issues during my internship. My projects, such
              as an online chess game and a service booking platform, reflect my
              commitment to creating high-quality and innovative solutions.
            </p>
          </div>
          <div className="my-2 text-sm lg:text-lg">
            <h2
              className={`py-2 text-lg lg:text-xl text-linkedIn-color border-b border-black-color font-semibold ${merri.className}`}
            >
              Collaborate
            </h2>
            <p className="p-1">
              I am excited to take on new challenges and contribute my expertise
              to your project. Whether you have a specific idea or need
              guidance, I am here to bring your vision to life.
            </p>
          </div>
          <div className="my-1 p-4 text-center flex flex-col items-center text-sm lg:text-lg">
            <p className={`${merri.className} text-insta-pink font-semibold`}>
              Feel free to reach out, and let us  create something extraordinary
              together!
            </p>
            <div className="mt-2 flex items-center gap-2">
              <IoMailOpenOutline className="text-xl" />
              <p className="italic">maheshreddi608@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
