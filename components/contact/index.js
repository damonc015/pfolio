import { useState, useEffect, useRef, forwardRef, useContext } from "react";
import { gsap } from "../../util/gsap";
import emailjs from "@emailjs/browser";
import RoadContext from "../../util/roadmapProvider";

const Contact = forwardRef((props, ref) => {
  const formRef = useRef();
  const contactRef = useRef();
  const contactTime = useRef();
  const contactShadow = useRef();
  const [status, setStatus] = useState();

  const { inView } = props;
  const { setActiveIcon, lastTimeout } = useContext(RoadContext);

  useEffect(() => {
    if (!inView) return;
    lastTimeout = setTimeout(() => {
      setActiveIcon("contact");
    }, 1000);
    return () => {
      clearTimeout(lastTimeout);
    };
  }, [inView]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5rjproe",
        "portTemplate",
        formRef.current,
        "4xoczYsFBI7ZjVrAM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Success");
        },
        (error) => {
          console.log(error.text);
          setStatus("Fail");
        }
      );
    formRef.current.reset();
  };

  useEffect(() => {
    const a = gsap.utils.selector(contactRef);
    contactTime.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#contactContainer",
          toggleActions: "play pause resume none",
          start: "top center",
          end: "bottom top",
        },
      })
      .to(a("#contactTitle"), {
        duration: 1,
        text: "Contact",
      })
      .to(a("#contactTitleShadow"), { duration: 1, opacity: 1 }, 2)
      .fromTo(
        a("#formIntro"),
        { yPercent: 40 },
        { duration: 1, yPercent: 0, opacity: 1 },
        2
      )
      .fromTo(
        a(".formContainer"),
        { yPercent: 40 },
        { duration: 1.3, yPercent: 0, opacity: 1 },
        2.25
      )
      .fromTo(
        a(".formLabels"),
        { xPercent: 20 },
        {
          duration: 1.7,
          xPercent: 0,
          opacity: 1,
          stagger: 0.75,
          ease: "Back.easeOut",
        },
        3
      );

    contactShadow.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#contactContainer",
          toggleActions: "play pause resume none",
          start: "top center",
          end: "bottom top",
        },
      })
      .fromTo(
        a("#contactTitleShadow"),
        {
          x: "25%",
        },
        { duration: 120, x: "-25%", repeat: -1, ease: "Power0.easeOut" },
        2
      );
  }, []);

  return (
    <div className="overlay" ref={ref}>
      <div id="contactContainer" ref={contactRef}>
        <div id="contactTitleContainer">
          <h1 id="contactTitle"></h1>
          <span id="contactTitleShadow">{"contact ".repeat(100)}</span>
        </div>
        <div id="formIntro">
          <h2>Let&apos;s talk!</h2>
          <p>
            If you have any inquiries, suggestions, or want to simply chat,
            I&apos;d love to hear from you.
          </p>
        </div>
        <form className="formContainer" ref={formRef} onSubmit={sendEmail}>
          <span className="nameContainer">
            <label className="formLabels">
              Name <span style={{ marginLeft: ".3rem" }}>*</span>
            </label>
            <input type="text" placeholder="John Doe" name="name" />
          </span>
          <span className="emailContainer">
            <label className="formLabels">
              Email <span style={{ marginLeft: ".3rem" }}>*</span>
            </label>
            <input type="email" placeholder="email@email.com" name="email" />
          </span>
          <span className="emailContainer">
            <label className="formLabels">
              Subject <span style={{ marginLeft: ".3rem" }}>*</span>
            </label>
            <input type="text" placeholder="Header" name="subject" />
          </span>
          <span className="messageContainer">
            <label className="formLabels">
              Message <span style={{ marginLeft: ".3rem" }}>*</span>
            </label>
            <textarea placeholder="Message" name="message" />
          </span>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
});

export default Contact;
