import React from "react";

//styles
import "./TryForFree.css";

//Components
import Button from "../../Button/Button";

const TryForFree = ({ signUpRef }) => {
  return (
    <div ref={signUpRef} className="tryForFree">
      <div className="tryForFree__left">
        <h2 className="h2 text-color-2">Try for free!</h2>
        <p>Get limited 1 week free try our features!</p>
      </div>
      <div className="tryForFree__right">
        <Button color="pink">Learn more</Button>
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
    </div>
  );
};

export default TryForFree;
