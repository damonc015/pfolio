import Head from "next/head";
import { useEffect, useContext } from "react";
import Homepage from "../components/homepage";
import About from "../components/about";
import Showcase from "../components/showcase";
import Contact from "../components/contact";
import { InView } from "react-intersection-observer";
import RoadContext from "../util/roadmapProvider";

export default function Home() {
  const { firstTime } = useContext(RoadContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      id="container"
      style={firstTime ? { height: "100vh", overflowY: "hidden" } : null}
    >
      <Head>
        <title>Damon Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/images/portfolioIcon.ico" />
      </Head>

      <InView threshold={0.85}>
        {({ ref, inView }) => <Homepage ref={ref} inView={inView} />}
      </InView>
      <InView threshold={0.85}>
        {({ ref, inView }) => <About ref={ref} inView={inView} />}
      </InView>
      <InView threshold={0.7}>
        {({ ref, inView }) => <Showcase ref={ref} inView={inView} />}
      </InView>
      <InView threshold={0.85}>
        {({ ref, inView }) => <Contact ref={ref} inView={inView} />}
      </InView>
    </div>
  );
}
