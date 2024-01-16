import React from "react";
import Cover from "./Cover";
import Projects from "./Projects";

const Dashboard = () => {
  return (
    <div className="md:ml-72 m-2 mt-10 rounded-lg">
      <Cover />
      <Projects />
    </div>
  );
};

export default Dashboard;
