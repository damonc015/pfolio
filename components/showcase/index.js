import { useEffect, useRef, forwardRef, useContext } from "react";
import { gsap } from "../../util/gsap";
import Project from "./Project";
import RoadContext from "../../util/roadmapProvider";

const Showcase = forwardRef((props, ref) => {
  const showcaseRef = useRef();
  const showcaseTime = useRef();
  const showcaseShadow = useRef();

  const { inView } = props;
  const { setActiveIcon, lastTimeout } = useContext(RoadContext);

  useEffect(() => {
    if (!inView) return;
    lastTimeout.current = setTimeout(() => {
      setActiveIcon("showcase");
    }, 1000);
    return () => {
      clearTimeout(lastTimeout.current);
    };
  }, [inView]);

  useEffect(() => {
    const a = gsap.utils.selector(showcaseRef);
    showcaseTime.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#showcaseContainer",
          toggleActions: "play pause resume none",
          start: "top center",
          end: "bottom top",
        },
      })
      .to(a("#showTitle"), {
        duration: 1,
        text: "Showcase",
      })
      .to(a("#showTitleShadow"), { duration: 1, opacity: 1 }, 2)
      .fromTo(
        a(".projectWrapper"),
        { yPercent: 40 },
        {
          duration: 2,
          yPercent: 0,
          opacity: 1,
          stagger: 0.4,
        },
        1.5
      );

    showcaseShadow.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#showcaseContainer",
          toggleActions: "play pause resume none",
          start: "top center",
          end: "bottom top",
        },
      })
      .fromTo(
        a("#showTitleShadow"),
        {
          x: "25%",
        },
        { duration: 120, x: "-25%", repeat: -1, ease: "Power0.easeOut" },
        1.5
      );
  }, []);

  return (
    <div className="overlay" ref={ref}>
      <div id="showcaseContainer" ref={showcaseRef}>
        <div id="showTitleContainer">
          <h1 id="showTitle"></h1>
          <span id="showTitleShadow">{" showcase ".repeat(100)}</span>
        </div>
        <div className="projectWrapper">
          <Project
            img="/images/stockPreview.png"
            title="Stock Alerter"
            links={[
              "https://github.com/damonc015/stockalerterv2",
              "https://stockalerter.vercel.app/",
              "https://blogsprite.vercel.app/tech/stock_alerter",
            ]}
            desc="A web application helping users track price action on selected stock tickers. Created using NextJS, Finnhub's Websocket, NextAuth, and ChartJS. (Username: stockalerter, Password: portfoliodamon123)"
          />
        </div>
        <div className="projectWrapper">
          <Project
            img="/images/gmapsPreview.png"
            title="Pick a Bite"
            links={[
              "https://github.com/damonc015/pickabite",
              "https://pickabite.netlify.app/",
              "https://blogsprite.vercel.app/tech/pickabite",
            ]}
            desc="A web application that helps users pick out their next meal when they're not sure what to eat. Created using NextJS, Google's Map Api and Places Library, and SwiperJS."
          />
        </div>
        <div className="projectWrapper">
          <Project
            img="/images/blogPreviewHorizontal.png"
            title="Blogsprite"
            links={[
              "https://github.com/damonc015/blogsprite",
              "https://blogsprite.vercel.app/",
              "https://blogsprite.vercel.app/tech/blogsprite",
            ]}
            desc="A personal blog created using NextJS to document building projects, highlighting hobbies, and sharing opinions."
          />
        </div>
      </div>
    </div>
  );
});
Showcase.displayName = "Showcase";
export default Showcase;
