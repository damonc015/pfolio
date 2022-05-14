import { useEffect, useRef } from "react";
import { FaBlogger, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import Socialitem from "./Socialitem";
import { gsap } from "../../util/gsap";

const Index = () => {
  const socialContainerRef = useRef();
  const socialContainerTimeline = useRef();

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
      5
    );
  }, []);

  return (
    <div className="socialContainer" ref={socialContainerRef}>
      <div className="socialIconContainerWrapper">
        <Socialitem
          title="Github"
          link="https://github.com/damonc015"
          symbol={<FaGithub />}
          id="A"
        />
      </div>
      <div className="socialIconContainerWrapper">
        <Socialitem
          title={"Resume"}
          link={"/portfolioresume.pdf"}
          symbol={<IoIosPaper />}
          id={"B"}
        />
      </div>
      <div className="socialIconContainerWrapper">
        <Socialitem
          title="Blog"
          link="https://blogsprite.vercel.app/"
          symbol={<FaBlogger />}
          id="C"
        />
      </div>

      <div className="socialIconContainerWrapper">
        <Socialitem title={"Email"} symbol={<AiOutlineMail />} id={"D"} />
      </div>

      <div className="socialIconContainerWrapper">
        <Socialitem
          title="Linkedin"
          link="https://www.linkedin.com/in/damon-chu-970b02171/"
          symbol={<FaLinkedin />}
          id="E"
        />
      </div>
    </div>
  );
};

export default Index;
