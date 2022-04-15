import { useEffect, useRef } from "react";
import { gsap } from "../../util/gsap";
import Project from "./Project";

const Showcase = () => {
  const showcaseRef = useRef();
  const showcaseTime = useRef();
  const a = gsap.utils.selector(showcaseRef);

  useEffect(() => {
    showcaseTime.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#showcaseContainer",
          toggleActions: "play pause resume none",
          start: "-5px top",
          end: "bottom top",
          markers: true,
        },
      })
      .to(".projectWrapper", {
        duration: 5,
        color: "red",
      });
  }, []);

  return (
    <div id="showcaseContainer" ref={showcaseRef}>
      <div className="projectWrapper">
        <Project img="" title="Pick a Bite" links={["1", "2", "3"]} desc="" />
      </div>
      <div className="projectWrapper">
        <Project img="" title="Pick a Bite" links={["1", "2", "3"]} desc="" />
      </div>
      <div className="projectWrapper">
        <Project img="" title="Pick a Bite" links={["1", "2", "3"]} desc="" />
      </div>
    </div>
  );
};

export default Showcase;
