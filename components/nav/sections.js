import React from "react";

const Sections = (props) => {
  const { setNav, setActiveIcon } = props;

  return (
    <ul>
        <li
          onClick={() => {
            setNav((prev) => !prev);
            setActiveIcon("home")
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            setNav((prev) => !prev);
            setActiveIcon("about")
          }}
        >
          About
        </li>
        <li
          onClick={() => {
            setNav((prev) => !prev);
            setActiveIcon("showcase")
          }}
        >
          Showcase
        </li>
        <li
          onClick={() => {
            setNav((prev) => !prev);
            setActiveIcon("contact")
          }}
        >
          Contact
        </li>
        <li
          onClick={() => {
            setNav((prev) => !prev);
          }}
        >
          Resume
        </li>
    </ul>
  );
};

export default Sections;
