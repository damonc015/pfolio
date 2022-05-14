import React from "react";
import Link from "next/link";

const Sections = (props) => {
  const { setNav, setActiveIcon } = props;

  return (
    <ul>
      <li
        onClick={() => {
          setNav((prev) => !prev);
          setActiveIcon("home");
        }}
      >
        Home
      </li>
      <li
        onClick={() => {
          setNav((prev) => !prev);
          setActiveIcon("about");
        }}
      >
        About
      </li>
      <li
        onClick={() => {
          setNav((prev) => !prev);
          setActiveIcon("showcase");
        }}
      >
        Showcase
      </li>
      <li
        onClick={() => {
          setNav((prev) => !prev);
          setActiveIcon("contact");
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
