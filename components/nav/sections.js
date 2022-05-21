import React from "react";
import Link from "next/link";

const Sections = (props) => {
  const { setNav, setActiveIcon, firstTime, setFirstTime } = props;

  return (
    <ul>
      <li
        onClick={() => {
          setNav((prev) => !prev);
          setActiveIcon("home");
          if (firstTime) {
            setFirstTime(false);
          }
        }}
      >
        Home
      </li>
      <li
        onClick={() => {
          setNav((prev) => !prev);
          setActiveIcon("about");
          if (firstTime) {
            setFirstTime(false);
          }
        }}
      >
        About
      </li>
      <li
        onClick={() => {
          setNav((prev) => !prev);
          setActiveIcon("showcase");
          if (firstTime) {
            setFirstTime(false);
          }
        }}
      >
        Showcase
      </li>
      <li
        onClick={() => {
          setNav((prev) => !prev);
          setActiveIcon("contact");
          if (firstTime) {
            setFirstTime(false);
          }
        }}
      >
        Contact
      </li>
      <Link href={"/portfolioresume.pdf"} passHref>
        <a target="_blank" style={{ height: "auto", width: "auto" }}>
          <li
            onClick={() => {
              setNav((prev) => !prev);
            }}
          >
            Resume
          </li>
        </a>
      </Link>
    </ul>
  );
};

export default Sections;
