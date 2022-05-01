import { useEffect, useRef, forwardRef, useContext } from "react";
import { gsap } from "../../util/gsap";
import RoadContext from "../../util/roadmapProvider";

const About = forwardRef((props, ref) => {
  const aboutRef = useRef();
  const aboutTime = useRef();
  const aboutShadow = useRef();

  const { inView } = props;
  const { setActiveIcon, lastTimeout } = useContext(RoadContext);

  useEffect(() => {
    if (!inView) return;
    lastTimeout = setTimeout(() => {
      setActiveIcon("about");
    }, 1000);
    return () => {
      clearTimeout(lastTimeout);
    };
  }, [inView]);

  useEffect(() => {
    const a = gsap.utils.selector(aboutRef);
    aboutTime.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#aboutContainer",
          toggleActions: "play pause resume none",
          start: "top center",
          end: "bottom top",
        },
      })
      .to(a("#aboutTitle"), {
        duration: 1,
        text: "About",
      })
      .to(a("#aboutTitleShadow"), { duration: 1, opacity: 1 }, 2);

    aboutShadow.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#aboutContainer",
          toggleActions: "play pause resume none",
          start: "top center",
          end: "bottom top",
        },
      })
      .fromTo(
        a("#aboutTitleShadow"),
        {
          x: "25%",
        },
        { duration: 120, x: "-25%", repeat: -1, ease: "Power0.easeOut" },
        2
      );
  }, []);
  return (
    <div className="overlay" ref={ref}>
      <div id="aboutContainer" ref={aboutRef}>
        <div id="aboutTitleContainer">
          <h1 id="aboutTitle"></h1>
          <span id="aboutTitleShadow">{" about ".repeat(100)}</span>
        </div>
        <p>Hi I'm Damon! I'm an NYU graduate and I make websites</p>
      </div>
    </div>
  );
});

export default About;
