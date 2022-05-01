import { useEffect, useRef, useContext } from "react";
import Link from "next/link";
import { FaBlogger, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import Socialitem from "./Socialitem";
import { gsap } from "../../util/gsap";
import RoadContext from "../../util/roadmapProvider";

const Index = () => {
  const socialContainerRef = useRef();
  const socialContainerTimeline = useRef();
  const { firstTime, setFirstTime, setActiveIcon } = useContext(RoadContext);

  useEffect(() => {
    const a = gsap.utils.selector(socialContainerRef);
    socialContainerTimeline.current = gsap.timeline().fromTo(
      a(".socialIconContainerWrapper"),
      { opacity: 0, xPercent: 50 },
      {
        duration: 1.5,
        opacity: 1,
        xPercent: 0,
        stagger: { each: 0.25 },
        ease: "Back.easeOut",
      },
      8
    );
  }, []);

  return (
    <div className="socialContainer" ref={socialContainerRef}>
      <Link href="https://github.com/damonc015" passHref>
        <a target="_blank" style={{ height: "inherit", width: "inherit" }}>
          <div className="socialIconContainerWrapper">
            <Socialitem title={"Github"} symbol={<FaGithub />} id={"A"} />
          </div>
        </a>
      </Link>

      <div className="socialIconContainerWrapper">
        <Socialitem title={"Resume"} symbol={<IoIosPaper />} id={"B"} />
      </div>

      <Link href="https://blogsprite.vercel.app/" passHref>
        <a target="_blank" style={{ height: "inherit", width: "inherit" }}>
          <div className="socialIconContainerWrapper">
            <Socialitem title={"Blog"} symbol={<FaBlogger />} id={"C"} />
          </div>
        </a>
      </Link>

      <div
        className="socialIconContainerWrapper"
        onClick={() => {
          if (firstTime) {
            setFirstTime(false);
          }
          setActiveIcon("contact");
        }}
      >
        <Socialitem title={"Email"} symbol={<AiOutlineMail />} id={"D"} />
      </div>

      <Link href="https://www.linkedin.com/in/damon-chu-970b02171/" passHref>
        <a target="_blank" style={{ height: "inherit", width: "inherit" }}>
          <div className="socialIconContainerWrapper">
            <Socialitem title={"Linkedin"} symbol={<FaLinkedin />} id={"E"} />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Index;
