import React from "react";

//styles
import "./Navbar.css";

//assets
import Logo from "../../logo.svg";
import Button from "../Button/Button";

const Navbar = ({ activeSection, aboutRef, helpRef, featRef, signUpRef }) => {
  const links = [
    { text: "About", elem: aboutRef, block: "center" },
    { text: "Help", elem: helpRef, block: "center" },
    { text: "Features", elem: featRef, block: "start" },
    { text: "Signup", elem: signUpRef, block: "center" },
  ];

  return (
    <div className="navbar">
      <img src={Logo} alt="logo" />

      <div className="navbar__links">
        {links.map(({ text, elem, block }, index) => (
          <div
            key={text}
            className={`navbar__link ${
              activeSection === text ? "navbar__link__active" : ""
            } `}
            onClick={() =>
              elem &&
              elem.current.scrollIntoView({
                behavior: "smooth",
                block,
                inline: "nearest",
              })
            }
          >
            {text}
          </div>
        ))}
      </div>

      <Button>
        Request Demo
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 15L21 8L15 1"
            stroke="#9C69E2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 8H1"
            stroke="#9C69E2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
};

export default Navbar;
