import { useState, useEffect, useRef } from "react";
import { gsap, hoverElement } from "../../util/gsap";
import Roadicon from "./roadIcon";

const Index = () => {
  const roadTime = useRef();
  const roadmapRef = useRef();
  const [activeIcon, setActiveIcon] = useState();

  useEffect(() => {
    if (!activeIcon) return;
    roadTime.current = gsap.timeline().to(window, {
      duration: 1,
      scrollTo: {
        y: `#${activeIcon}Container`,
        autokill: true,
      },
    });
  }, [activeIcon]);
  return (
    <div id="roadmap" ref={roadmapRef}>
      <Roadicon page="home" current={activeIcon} isActive={setActiveIcon} />
      <Roadicon page="about" current={activeIcon} isActive={setActiveIcon} />
      <Roadicon page="showcase" current={activeIcon} isActive={setActiveIcon} />
      <Roadicon page="contact" current={activeIcon} isActive={setActiveIcon} />
    </div>
  );
};

export default Index;
