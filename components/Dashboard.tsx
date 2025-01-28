import React from "react";
import Cover from "./Cover";
import Projects from "./ProjectsContainer";
import SkillsContainer from "./SkillsContainer";

const Dashboard = () => {
  return (
    <section className=" flex justify-center items-center">
      <div className="lg:ml-72 m-2 mt-14 rounded-lg max-h-screen">
        <Cover />
        <Projects />
        <SkillsContainer />
      </div>
    </section>
  );
};

export default Dashboard;
