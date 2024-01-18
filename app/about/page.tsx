import { Metadata } from "next";
import { Noto_Sans, Merriweather, Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: "About | Arjun",
};

const noto = Noto_Sans({ subsets: ["greek"] });
const merri = Merriweather({ subsets: ["latin"], weight: ["300"] });
const nuni = Nunito({ subsets: ["latin"], weight: "300" });

const About = () => {
  return (
    <section className=" flex justify-center items-center relative">
      <div
        className={`lg:ml-72 m-2 mt-14 bg-card-primary rounded-lg text-white flex flex-col flex-wrap justify-center p-4 w-3/4 ${merri.className}`}
      >
        <h1
          className={`text-2xl ${noto.className} flex self-center text-twitter-color font-bold `}
        >
          About Me
        </h1>
        <p
          className={`${merri.className} flex self-center w-5/6 text-md m-4 p-4 leading-loose`}
        >
          Greetings! I am a passionate and dedicated web developer with a solid
          year of experience in Full Stack Development. My expertise lies in the
          MERN (MongoDB, Express.js, React, Node.js) stack, Next.js, and MySQL.
          I find immense joy in turning ideas into robust and user-friendly web
          applications.
        </p>
        <div className=" ml-8 w-full">
          <div className=" ml-12">
            <h3 className=" flex self-start mt-2 text-insta-pink">
              Professional Journey:
            </h3>
            <p className=" flex self-center w-5/6 text-md m-2 p-4 leading-loose">
              My journey in Full Stack Development began a year ago, and since
              then, I've been dedicated to staying at the forefront of
              technology trends. I've successfully delivered projects that not
              only meet but exceed client expectations, demonstrating my
              commitment to quality and innovation.
            </p>
          </div>
          <div className=" ml-12">
            <h3 className=" flex self-start mt-2 text-fiver-color">
              AI Integration:
            </h3>
            <p className=" flex self-center w-5/6 text-md m-4 p-4 leading-loose">
              In addition to traditional full-stack development, I leverage
              cutting-edge AI technologies to enhance productivity and user
              experiences. By incorporating AI tools like ChatGPT, I streamline
              communication processes, automate routine tasks, and provide
              intelligent solutions for a more efficient workflow.
            </p>
          </div>
          <div className={`ml-10 p-2`}>
            <h3 className=" flex self-start my-4 text-linkedIn-color font-bold">
              Why Work With Me?
            </h3>
            <ul className=" flex flex-col">
              <li className=" m-1 p-1">
                <h3 className=" flex justify-start text-btn-highlight">
                  Client-Centric Approach:
                </h3>
                <p className=" flex p-6 pr-10">
                  I prioritize understanding the unique needs of each client,
                  ensuring that the solutions I provide align perfectly with
                  their goals.
                </p>
              </li>
              <li className=" m-1 p-1">
                <h3 className=" text-insta-pink">Continuous Learning:</h3>
                <p className=" p-6 pr-8">
                  The dynamic nature of web development motivates me to stay
                  updated with the latest technologies. I believe in continuous
                  learning to bring cutting-edge solutions to my projects.
                </p>
              </li>
              <li className=" m-1 p-1">
                <h3 className=" text-freelancer-color">AI Integration:</h3>
                <p className=" p-6 pr-10">
                  {" "}
                  I harness the power of AI to boost productivity, automate
                  tasks, and enhance user interactions. This ensures that my
                  projects not only meet current standards but also incorporate
                  forward-thinking solutions.
                </p>
              </li>
              <li className=" m-1 p-1">
                <h3 className=" text-btn-highlight">Collaborative Spirit:</h3>
                <p className=" p-6 pr-10">
                  I value effective communication and collaboration. Building a
                  strong partnership with clients is essential for me to deliver
                  solutions that truly resonate with their vision.
                </p>
              </li>
            </ul>
          </div>
          <div className=" ml-12 mt-4">
            <h3 className=" flex self-start text-yellow">Let's Collaborate:</h3>
            <p className=" flex self-center w-5/6 text-md p-2 leading-loose">
              I am eager to take on new challenges and contribute my skills to
              your project. Whether you have a specific idea in mind or need
              guidance on technology choices, I am here to bring your vision to
              life.
            </p>
          </div>
        </div>
        <div className=" flex self-center">
          <p className="capitalize p-2 m-2 mt-10 text-twitter-color  font-extralight">
            Feel free to reach out, and let's create something extraordinary
            together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
