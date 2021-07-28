import React from "react";

//styles
import "./Button.css";

const Button = ({ children, color }) => {
  return <div className={`btn btn-${color}`}>{children}</div>;
};

export default Button;
