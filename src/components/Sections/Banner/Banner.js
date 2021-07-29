import React from "react";
import Button from "../../Button/Button";

//styles
import "./Banner.css";

//assets
import BannerImg from "../../../assets/Banner.png";

const Banner = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} className="banner">
      <div className="banner__left">
        <div className="h1">Save your data storage here.</div>
        <p>
          Data Warehouse is a data storage area that has been tested for
          security, so you can store your data here safely but not be afraid of
          being stolen by others.
        </p>

        <Button color="purple">Learn more</Button>
      </div>

      <img src={BannerImg} alt="banner" />
    </div>
  );
};

export default Banner;
