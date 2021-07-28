import React from "react";

//Styles
import "./TestCard.css";

const TestCard = ({ data: { title, subtitle, desc, avatar } }) => {
  return (
    <div className="testCard">
      <img src={avatar} alt={title} />

      <div className="testCard__header">
        <div className="testCard__title">{title}</div>
        <div className="testCard__subtitle">{subtitle}</div>
      </div>

      <div></div>
      <div className="testCard__desc">{desc}</div>
    </div>
  );
};

export default TestCard;
