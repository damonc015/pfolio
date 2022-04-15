import { useEffect, useRef } from "react";
import { gsap, hoverElement, leaveElement } from "../../util/gsap";
import { GiAnvil, GiAnvilImpact } from "react-icons/gi";

const Roadicon = (props) => {
  const { page, current, isActive } = props;
  const roadIconRef = useRef();
  const roadTime = useRef();
  const a = gsap.utils.selector(roadIconRef);
  useEffect(() => {
    roadTime.current = gsap
      .timeline()
      .pause()
      .to(a(".roadmapText"), { duration: .5, text: page.toUpperCase() });
  }, []);

  return (
    <div
      ref={roadIconRef}
      onClick={() => {
        isActive(page);
      }}
      className={`roadmapIcon${page}`}
      onMouseEnter={() => {
        if (!roadTime.current) return;
        hoverElement(roadTime.current);
      }}
      onMouseLeave={() => {
        if (!roadTime.current) return;
        leaveElement(roadTime.current);
      }}
    >
      {current === page ? (
        <GiAnvilImpact className="hitAnvil" />
      ) : (
        <GiAnvil className="normalAnvil" />
      )}
      <span className="roadmapText"></span>
    </div>
  );
};

export default Roadicon;
