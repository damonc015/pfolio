import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRef, useEffect } from "react";
import Homepage from "../components/homepage";
import About from "../components/about";
import Showcase from "../components/showcase";
import Contact from "../components/contact";
import Roadmap from "../components/roadmap";
import Firesparks from "../components/effects/firesparks/firesparks";
import { gsap, hoverElement, leaveElement  } from "../util/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  let animateRef = useRef();
  let q = gsap.utils.selector(animateRef);
  // gsap.registerPlugin(ScrollTrigger)
  let arrow;

  useEffect(() => {
    arrow = gsap.to(q(".test"), {
      // scrollTrigger: { trigger: ".test" },
      x: 400,
      duration: 10,
      text: "jojiojojojojojojojojojojojojojojojojojojojo",
      paused: true,
    });
    return () => {
      arrow.kill();
    };
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>D.Chu Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/images/anvilLogo.svg" />
      </Head>

      <div
        ref={animateRef}
        onMouseEnter={() => {
          hoverElement(arrow);
        }}
        onMouseLeave={() => {
          leaveElement(arrow);
        }}
      >
        <div className="test"></div>
      </div>

      
      <Homepage />
      <Roadmap/>
      <About />
      <Showcase />
      <Contact />
    </div>
  );
}
