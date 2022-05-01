import { useState, useContext, useEffect, useRef, forwardRef } from "react";
import { gsap, hoverElement, leaveElement } from "../../util/gsap";
import Nav from "../nav";
import City from "./City";
import Socials from "../socials";
import Roadmap from "../roadmap";
import RoadContext from "../../util/roadmapProvider";
import Taxi from "./Taxi";

const Homepage = forwardRef((props, ref) => {
  const { inView } = props;
  const { setActiveIcon, lastTimeout } = useContext(RoadContext);
  const [text, setText] = useState("");
  const homeRef = useRef();
  const homeTime = useRef();

  useEffect(() => {
    const a = gsap.utils.selector(homeRef);
    homeTime.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#homeContainer",
          toggleActions: "play reset play reset",
          start: "-15px top",
          end: "bottom top",
        },
      })
      .fromTo(
        a(".taxiWrap"),
        { x: "90vw" },
        { duration: 8, x: 0, stagger: 0.5 }
      )
      .fromTo(
        a("#title"),
        { y: "20vh" },
        { duration: 2, y: "0vh", opacity: 1 },
        8
      );
  }, []);

  useEffect(() => {
    if (!inView) return;
    lastTimeout = setTimeout(() => {
      setActiveIcon("home");
    }, 1000);
    return () => {
      clearTimeout(lastTimeout);
    };
  }, [inView]);

  return (
    <div className="overlay" ref={ref}>
      <div id="homeContainer" ref={homeRef}>
        <h1 id="title">Select a taxi to embark...</h1>
        {text ? (
          <h2 id="taxiText">
            <span>Travel to</span>
            <span id="taxiTextHead">{text}</span>
          </h2>
        ) : null}
        <Nav />
        <Socials />
        <City />
        <div className="taxiContainer">
          <div className="taxiWrap">
            <Taxi type="about" setText={setText} />
          </div>
          <div className="taxiWrap">
            <Taxi type="showcase" setText={setText} />
          </div>
          <div className="taxiWrap">
            <Taxi type="contact" setText={setText} />
          </div>
        </div>
        <Roadmap />
      </div>
    </div>
  );
});

export default Homepage;
