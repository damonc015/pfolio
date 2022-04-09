import { useEffect, useRef } from "react";
import { gsap, hoverElement } from "../../util/gsap";
import classes from "./index.module.scss";

const index = () => {
  const iconRef = useRef();
  const iconTime = useRef();

  useEffect(() => {
    iconTime.current = gsap.timeline();
    // iconTime.current.pause();
    iconTime.current.to(iconRef.current, {
      duration: 5,
      scrollTo: ".about_aboutContainer__SRyx6",
    });
  });
  return (
    <div className={classes.roadmap}>
      <div
        className={classes.homeIcon}
        ref={iconRef}
        // onClick={hoverElement(iconTime.current)}
      >
        aa
      </div>
    </div>
  );
};

export default index;
