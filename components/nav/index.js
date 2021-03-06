import { useState, useEffect, useRef, useContext } from "react";
import Sections from "./sections";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
import { gsap } from "../../util/gsap";
import RoadContext from "../../util/roadmapProvider";

const Index = () => {
  const [showNav, setShowNav] = useState(false);
  const { activeIcon, setActiveIcon, firstTime, setFirstTime } =
    useContext(RoadContext);
  const navTime = useRef();

  useEffect(() => {
    if (!activeIcon) return;
    navTime.current = gsap.timeline().to(window, {
      duration: 1,
      scrollTo: {
        y: `#${activeIcon}Container`,
        autokill: true,
      },
    });
  }, [activeIcon]);

  return (
    <nav>
      {showNav ? (
        <div className="showNav">
          <Sections
            setNav={setShowNav}
            setActiveIcon={setActiveIcon}
            firstTime={firstTime}
            setFirstTime={setFirstTime}
          />
          <span
            className="menuIcon"
            onClick={() => setShowNav((prev) => !prev)}
          >
            <BiMenuAltRight />
          </span>
        </div>
      ) : (
        <div className="hideNav">
          <span
            className="menuIcon"
            onClick={() => setShowNav((prev) => !prev)}
          >
            <BiMenuAltLeft />
          </span>
        </div>
      )}
    </nav>
  );
};

export default Index;
