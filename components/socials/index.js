import React from "react";
import Link from "next/link";
import { FaBlogger, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import Socialitem from "./Socialitem";
import classes from "./index.module.scss";

const index = () => {
  return (
    <div className={classes.socialContainer}>
      <Link href="https://github.com/damonc015" passHref>
        <a target="_blank" style={{ height: "inherit", width: "inherit" }}>
          <Socialitem title={"Github"} symbol={<FaGithub />} id={"A"} />
        </a>
      </Link>

      <Socialitem title={"Resume"} symbol={<IoIosPaper />} id={"B"} />

      <Link href="https://blogsprite.vercel.app/" passHref>
        <a target="_blank" style={{ height: "inherit", width: "inherit" }}>
          <Socialitem title={"Blog"} symbol={<FaBlogger />} id={"C"} />
        </a>
      </Link>

      <Socialitem title={"Email"} symbol={<AiOutlineMail />} id={"D"} />

      <Link href="https://www.linkedin.com/in/damon-chu-970b02171/" passHref>
        <a target="_blank" style={{ height: "inherit", width: "inherit" }}>
          <Socialitem title={"Linkedin"} symbol={<FaLinkedin />} id={"E"} />
        </a>
      </Link>
    </div>
  );
};

export default index;
