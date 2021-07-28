import React from "react";

//assets
import "./FeatureBox.css";

const FeatureBox = ({ colorCode, title, data }) => {
  return (
    <div className="featureBox">
      <img src={data.img} alt={title} />
      <div className="featureBox__content">
        <div className="featureBox__title">{title}</div>
        <div className="featureBox__desc">{data.description}</div>
        <p>
          Learn More{" "}
          <svg
            width="23"
            height="16"
            viewBox="0 0 23 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2852 15.001L21.2852 8.00098L15.2852 1.00098"
              stroke="#9C69E2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.2852 8.00098H1.28516"
              stroke="#9C69E2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </div>

      <svg
        width="434"
        height="358"
        viewBox="0 0 434 358"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.1"
          d="M44.2904 41.7355C48.3276 17.6466 69.1778 0.00012207 93.6026 0.00012207H383.285C410.899 0.00012207 433.285 22.3859 433.285 50.0001V308C433.285 335.614 410.899 358 383.285 358H50.3624C19.4471 358 -4.05989 330.226 1.05018 299.736L44.2904 41.7355Z"
          fill={`var(--color-${data.colorCode})`}
        />
      </svg>
    </div>
  );
};

export default FeatureBox;
