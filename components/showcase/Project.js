import React from "react";
import { FaBlogger, FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";

const Project = (props) => {
  const { img, title, links, desc } = props;

  return (
    <div className="projectContainer">
      <div className="projectTitleContainer">
        <h2 className="projectTitle">{title}</h2>
        <span className="projectIcons">
          <FaGithub />
          <RiExternalLinkLine />
          <FaBlogger />
        </span>
      </div>
      <div className="projectDescription"></div>
    </div>
  );
};

export default Project;
