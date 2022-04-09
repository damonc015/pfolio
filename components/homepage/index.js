import React from "react";
import classes from "./index.module.scss"
import Nav from "../nav";
import Socials from "../socials";

const Homepage = () => {
  return (
    <div className={classes.homeContainer}>
      <Nav />
      <Socials/>
    </div>
  );
};

export default Homepage;
