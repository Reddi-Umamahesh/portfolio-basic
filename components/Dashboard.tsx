import React from "react";
import Cover from "./Cover";
import Projects from "./Projects";

const Dashboard = () => {
  return (
    <div className="lg:ml-72 m-2 mt-10 rounded-lg max-h-screen">
      <Cover />
      <Projects />
    </div>
  );
};

export default Dashboard;
