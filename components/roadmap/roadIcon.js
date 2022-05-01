import { useEffect, useRef, useContext } from "react";
import { gsap, hoverElement, leaveElement } from "../../util/gsap";
import { RiTaxiLine, RiTaxiFill } from "react-icons/ri";
import RoadContext from "../../util/roadmapProvider";

const Roadicon = (props) => {
  const { page } = props;
  const roadIconRef = useRef();
  const roadTime = useRef();
  const{activeIcon, setActiveIcon} = useContext(RoadContext)

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
        setActiveIcon(page);
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
      {activeIcon === page ? (
        <RiTaxiFill className="hitAnvil" />
      ) : (
        <RiTaxiLine className="normalAnvil" />
      )}
      <span className="roadmapText"></span>
    </div>
  );
};

export default Roadicon;
