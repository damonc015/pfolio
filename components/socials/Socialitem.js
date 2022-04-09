import { useEffect, useRef } from "react";
import { gsap, hoverElement, leaveElement } from "../../util/gsap";

const Socialitem = (props) => {
  const { title, symbol, id } = props;
  const socialItemRef = useRef();
  const socialTime = useRef();
  const containerId = useRef(`socialIconContainer${id}`);
  const classId = useRef(`socialIconHeader${id}`);
  const logoId = useRef(`socialIconIcon${id}`);

  useEffect(() => {
    socialTime.current = gsap.timeline();
    socialTime.current.pause();
    socialTime.current.to(`.${containerId.current}`, {
      duration: .2,
      y: -3,
    });
    socialTime.current.to(`.${logoId.current}`, {
      duration: 0.2,
      color: "#FF8B1F",
    });
    socialTime.current.to(`.${classId.current}`, {
      duration: 0.4,
      text: title,
    });
  }, []);

  return (
    <div
      className={containerId.current}
      onMouseEnter={() => {
        if (!socialTime.current) return;
        hoverElement(socialTime.current);
      }}
      onMouseLeave={() => {
        if (!socialTime.current) return;
        leaveElement(socialTime.current);
      }}
    >
      <span className={classId.current} ref={socialItemRef}></span>
      <span className={logoId.current}>{symbol}</span>
    </div>
  );
};

export default Socialitem;
