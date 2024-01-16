import React from "react";

type ProjectCardProp = {
  title: string;
  description: string;
  img: string;
};

const ProjectCard = ({ title, description, img }: ProjectCardProp) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default ProjectCard;
