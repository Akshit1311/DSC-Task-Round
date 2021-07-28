import React, { useState } from "react";
import TestCard from "./TestCard/TestCard";

//styles
import "./Testimonials.css";

//assets
import JohnFangImg from "../../../assets/Tests/JohnFang.png";
import JennyDoeImg from "../../../assets/Tests/JennyDoe.png";
import WilliamImg from "../../../assets/Tests/William.png";

const Testimonials = () => {
  const [activeCardIx, setActiveCardIx] = useState(0);

  const testData = [
    {
      title: "John Fang",
      subtitle: "wordfaang.com",
      desc: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
      avatar: JohnFangImg,
    },
    {
      title: "Jenny Doe",
      subtitle: "UX Engineer",
      desc: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
      avatar: JennyDoeImg,
    },
    {
      title: "William",
      subtitle: "Web Designer",
      desc: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
      avatar: WilliamImg,
    },
  ];

  return (
    <div className="testimonials">
      <h2 className="h2 text-white">Testimonials</h2>

      <div className="testimonials__cards">
        <div className="testimonials__cards__cover">
          {testData.map((test) => (
            <TestCard key={test.title} data={test} />
          ))}
        </div>
      </div>

      <div className="testimonials__row">
        <div className="testimonials__navBtns">
          {testData.map((test, i) => (
            <div
              key={test.title}
              className={`testimonials__navBtn ${
                i === activeCardIx ? "testimonials__navBtn__active" : ""
              }`}
              onClick={() => setActiveCardIx(i)}
            />
          ))}
        </div>
        <div className="testimonials__arrows">
          <svg
            width="42"
            height="16"
            viewBox="0 0 42 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
