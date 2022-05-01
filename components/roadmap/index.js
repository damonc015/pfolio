import { useEffect, useRef, useContext } from "react";
import { gsap } from "../../util/gsap";
import RoadContext from "../../util/roadmapProvider";
import Roadicon from "./roadIcon";

const Index = () => {
  const roadTime = useRef();
  const roadmapRef = useRef();
  const { firstTime, activeIcon } = useContext(RoadContext);

  useEffect(() => {
    if (!activeIcon) return;
    roadTime.current = gsap.timeline().to(window, {
      duration: 1,
      scrollTo: {
        y: `#${activeIcon}Container`,
        autokill: true,
      },
    });
    // window.addEventListener("wheel", () => {
    //   if (roadTime.current.isActive()) {
    //     roadTime.current.kill();
    //   }
    // });
  }, [activeIcon]);
  return (
    <div
      id="roadmap"
      ref={roadmapRef}
      style={firstTime ? { display: "none" } : null}
    >
      <Roadicon page="home" />
      <Roadicon page="about" />
      <Roadicon page="showcase" />
      <Roadicon page="contact" />
    </div>
  );
};

export default Index;
