import { useEffect, useRef } from "react";
import { gsap, hoverElement, leaveElement } from "../../util/gsap";

const Socialitem = (props) => {
  const { title, symbol, id } = props;
  const socialTime = useRef();
  const socialItemRef = useRef();
  const a = gsap.utils.selector(socialItemRef);

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

  return (
    <div
      className={`socialIconContainer${id}`}
      ref={socialItemRef}
      onMouseEnter={() => {
        if (!socialTime.current) return;
        hoverElement(socialTime.current);
      }}
      onMouseLeave={() => {
        if (!socialTime.current) return;
        leaveElement(socialTime.current);
      }}
    >
      <span className={`socialIconHeader${id}`}></span>
      <span className={`socialIconIcon${id}`}>{symbol}</span>
    </div>
  );
};

export default Socialitem;
