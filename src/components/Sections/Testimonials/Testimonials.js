import React, { useState } from "react";
import TestCard from "./TestCard/TestCard";

//styles
import "./Testimonials.css";

//assets
import JohnFangImg from "../../../assets/Tests/JohnFang.png";
import JennyDoeImg from "../../../assets/Tests/JennyDoe.png";
import WilliamImg from "../../../assets/Tests/William.png";
import Arrow from "../../../assets/Arrow";

const Testimonials = ({ helpRef }) => {
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
    <div ref={helpRef} className="testimonials">
      <h2 className="h2 text-white">Testimonials</h2>

      <div className="testimonials__cards">
        <div
          className="testimonials__cards__cover"
          style={{
            transform: `translateX(-${activeCardIx * 25}%)`,
            transition: ".5s",
          }}
        >
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
          <Arrow
            dir="left"
            isActive={activeCardIx > 0}
            onClick={() =>
              activeCardIx > 0 && setActiveCardIx((prev) => prev - 1)
            }
          />
          <Arrow
            dir="right"
            isActive={activeCardIx < testData.length - 1}
            onClick={() =>
              activeCardIx < testData.length - 1 &&
              setActiveCardIx((prev) => prev + 1)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
