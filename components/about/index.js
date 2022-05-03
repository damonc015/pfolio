import { useState, useEffect, useRef, forwardRef, useContext } from "react";
import { gsap } from "../../util/gsap";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import RoadContext from "../../util/roadmapProvider";

const About = forwardRef((props, ref) => {
  const aboutRef = useRef();
  const aboutTime = useRef();
  const aboutShadow = useRef();

  const { inView } = props;
  const { setActiveIcon, lastTimeout } = useContext(RoadContext);

  useEffect(() => {
    if (!inView) return;
    lastTimeout.current = setTimeout(() => {
      setActiveIcon("about");
    }, 1000);
    return () => {
      clearTimeout(lastTimeout.current);
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
      .to(a("#aboutTitleShadow"), { duration: 1, opacity: 1 }, 2)
      .fromTo(
        a(".itemWrapper"),
        { yPercent: 40 },
        { duration: 2.5, yPercent: 0, opacity: 1, stagger: 0.5 }
      );

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

        <div id="aboutTextContainer">
          <div className="itemWrapper">
            <Image
              width={250}
              height={250}
              alt="student"
              src="/images/student.svg"
              className="image"
            />
            <p className="aboutTextItem">
              I&apos;m{" "}
              <Link
                href="https://www.linkedin.com/in/damon-chu-970b02171/"
                passHref
              >
                <a target="_blank" className="aboutHightlight">
                  Damon
                </a>
              </Link>
              , a frontend developer based in NYC. I&apos;m a recent NYU
              graduate and on a journey to learn as much as I can about the web
              in order to create the most innovative interfaces.
            </p>
          </div>

          <div className="itemWrapper">
            <Image
              width={250}
              height={250}
              alt="student"
              src="/images/coder.svg"
            />
            <p className="aboutTextItem">
              The technologies I work with are{" "}
              <span className="aboutHightlight">HTML</span>,{" "}
              <span className="aboutHightlight">CSS/SCSS</span>,{" "}
              <span className="aboutHightlight">Javascript</span>,{" "}
              <span className="aboutHightlight">React</span>,{" "}
              <span className="aboutHightlight">NextJS</span>. I am currently
              dabbling with Blender in anticipation of a future project
              utilizing ThreeJS.
            </p>
          </div>

          <div className="itemWrapper">
            <Image
              width={250}
              height={250}
              alt="student"
              src="/images/chef.svg"
            />
            <p className="aboutTextItem">
              When I am not working with the web, I love to cook and try making{" "}
              <Link href="https://blogsprite.vercel.app/food" passHref>
                <a className="aboutHightlight" target="_blank">
                  new recipes
                </a>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
About.displayName = "About";
export default About;
