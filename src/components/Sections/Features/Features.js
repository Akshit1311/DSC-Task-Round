import React from "react";

//stylehacks
import "./Features.css";

//assets
import SearchDataImg from "../../../assets/Features/SearchData.png";
import TwoFourHourAccessImg from "../../../assets/Features/24HourAccess.png";
import PrintOutImg from "../../../assets/Features/PrintOut.png";
import SecurityCodeImg from "../../../assets/Features/SecurityCode.png";

//components
import FeatureBox from "./FeatureBox/FeatureBox";

const Features = ({ featRef }) => {
  const featuresData = {
    "Search Data": {
      img: SearchDataImg,
      description:
        "Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.",
      colorCode: "5",
    },
    "24 Hours Access": {
      img: TwoFourHourAccessImg,
      description:
        "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.",
      colorCode: 3,
    },
    "Print Out": {
      img: PrintOutImg,
      description:
        "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
      colorCode: 4,
    },
    "Security Code": {
      img: SecurityCodeImg,
      description:
        "Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.",
      colorCode: 6,
    },
  };

  return (
    <div ref={featRef} className="features">
      <h2 className="h2 text-color-2">Features</h2>
      <p className="text-color-1">
        Some of the features and advantages that we provide for those of you who
        store data in this Data Warehouse.
      </p>

      <div className="features__grid">
        {Object.keys(featuresData).map((key) => (
          <FeatureBox key={key} title={key} data={featuresData[key]} />
        ))}
      </div>
    </div>
  );
};

export default Features;
