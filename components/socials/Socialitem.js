import { useEffect, useRef, useContext } from "react";
import { gsap, hoverElement, leaveElement } from "../../util/gsap";
import Link from "next/dist/client/link";
import RoadContext from "../../util/roadmapProvider";

const Socialitem = (props) => {
  const { title, link, symbol, id } = props;
  const socialTime = useRef();
  const socialItemRef = useRef();
  const a = gsap.utils.selector(socialItemRef);

  const { firstTime, setFirstTime, setActiveIcon } = useContext(RoadContext);

  useEffect(() => {
    socialTime.current = gsap
      .timeline()
      .pause()
      .to(socialItemRef.current, {
        duration: 0.2,
        y: -3,
      })
      .to(a(`.socialIconIcon${id}`), {
        duration: 0.2,
        color: "#F3CA40",
      })
      .to(a(`.socialIconHeader${id}`), {
        duration: 0.4,
        text: title,
      });
  }, []);

  if (title === "Email") {
    return (
      <div
        className={`socialIconContainer${id}`}
        ref={socialItemRef}
        onClick={() => {
          if (firstTime) {
            setFirstTime(false);
          }
          setActiveIcon("contact");
        }}
      >
        <span className={`socialIconHeader${id}`}></span>
        <Link href={"/"} passHref>
          <a style={{ height: "100%", width: "0" }}>
            <span
              className={`socialIconIcon${id}`}
              onMouseEnter={() => {
                if (!socialTime.current) return;
                hoverElement(socialTime.current);
              }}
              onMouseLeave={() => {
                if (!socialTime.current) return;
                leaveElement(socialTime.current);
              }}
            >
              {symbol}
            </span>
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className={`socialIconContainer${id}`} ref={socialItemRef}>
      <span className={`socialIconHeader${id}`}></span>
      <Link href={link} passHref>
        <a target="_blank" style={{ height: "100%", width: "0" }}>
          <span
            className={`socialIconIcon${id}`}
            onMouseEnter={() => {
              if (!socialTime.current) return;
              hoverElement(socialTime.current);
            }}
            onMouseLeave={() => {
              if (!socialTime.current) return;
              leaveElement(socialTime.current);
            }}
          >
            {symbol}
          </span>
        </a>
      </Link>
    </div>
  );
};

export default Socialitem;
