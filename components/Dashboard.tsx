import React from "react";
import Cover from "./Cover";
import Projects from "./Projects";
import SkillsContainer from "./SkillsContainer";
import MoreProjects from "./MoreProjects";

const Dashboard = () => {
  return (
    <section className=" flex justify-center items-center">
      <div className="lg:ml-72 m-2 mt-14 rounded-lg max-h-screen">
        <Cover />
        <Projects />
        <SkillsContainer />
        <MoreProjects />
      </div>
    </section>
  );
};

export default Dashboard;
