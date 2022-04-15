import Head from "next/head";
import { useEffect } from "react";
import Homepage from "../components/homepage";
import About from "../components/about";
import Showcase from "../components/showcase";
import Contact from "../components/contact";
import Roadmap from "../components/roadmap";
import Firesparks from "../components/effects/firesparks/firesparks";
import { gsap, hoverElement, leaveElement } from "../util/gsap";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="container">
      <Head>
        <title>D.Chu Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/images/anvilLogo.svg" />
      </Head>

      <Homepage />
      <About />
      <Showcase />
      <Contact />
    </div>
  );
}
