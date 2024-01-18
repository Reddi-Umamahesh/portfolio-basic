import React from "react";
import Cover from "./Cover";
import Projects from "./Projects";
import SkillsContainer from "./SkillsContainer";

const Dashboard = () => {
  return (
    <div className="lg:ml-72 m-2 mt-10 rounded-lg max-h-screen">
      <Cover />
      <Projects />
      <SkillsContainer />
    </div>
  );
};

export default Dashboard;
