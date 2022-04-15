import React from "react";
import Image from "next/image";
import classes from "./index.module.scss"

const Logo = () => {
  return (
    <div className={classes.logoContainer}>
      <Image src="/images/anvilLogo.svg" width={100} height={100} alt=""/>
    </div>
  );
};

export default Logo;
