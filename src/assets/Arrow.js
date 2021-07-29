import React from "react";

const Arrow = ({ dir, isActive, ...rest }) => {
  const status = isActive ? "active" : "inactive";

  const arrowTypes = {
    active: (
      <svg
        width="42"
        height="16"
        viewBox="0 0 42 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=""
      >
        <path
          d="M7 1L1 8L7 15"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.999998 8L41 8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    inactive: (
      <svg
        width="22"
        height="16"
        viewBox="0 0 22 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path
            d="M15 15L21 8L15 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 8H1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
  };
  return (
    <div
      className={
        (dir === "left" && isActive) || (dir === "right" && !isActive)
          ? ""
          : "rot-180"
      }
      {...rest}
    >
      {arrowTypes[status]}
    </div>
  );
};

export default Arrow;
