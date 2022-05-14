import React from "react";
import { FaBlogger, FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

const Project = (props) => {
  const { img, title, links, desc } = props;

  return (
    <div className="projectContainer">
      <div className="projectTitleContainer">
        <Link href={links[1]} passHref>
          <a className="projectOverlayLink" target="_blank"></a>
        </Link>
        <div className="projectTitleHead">
          <h2 className="projectTitle">{title}</h2>
          <span className="projectIcons">
            <Link href={links[0]} passHref>
              <a target="_blank">
                <FaGithub />
              </a>
            </Link>
            <Link href={links[1]} passHref>
              <a target="_blank">
                <RiExternalLinkLine />
              </a>
            </Link>
            <Link href={links[2]} passHref>
              <a target="_blank">
                <FaBlogger />
              </a>
            </Link>
          </span>
        </div>
        <p className="projectDescription">{desc}</p>
      </div>
      <div className="projectImage">
        <Image src={img} alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Project;
