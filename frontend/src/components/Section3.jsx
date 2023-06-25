import React from "react";
import featuresIcon from "../SVG/features_icon_white.svg";
import section3Img from "../SVG/section3_img2_black.jpg"

const Section3 = () => {
  return (
    <div className="section3-container">
      <div className="section3-left">
        <div
          className="section3-img"
          style={{ backgroundImage: `url(${section3Img})` }}
        ></div>
      </div>
      <div className="section3-right">
        <div className="icon-wrapper">
          <img src={featuresIcon} alt="" width="24px" />
        </div>
        <h2 className="section3-title">
          Get the resources you need to get back to your society{" "}
        </h2>
        <p className="section3-description">
          Lorem ipsum dolor sit amet consectetur. Suspendisse suspendisse tempor
          et ipsum sit egestas nunc. Diam in cum a in. Lorem ipsum dolor sit
          amet consectetur. Suspendisse suspendisse tempor et ipsum sit egestas
          nunc. Diam in cum a in.{" "}
        </p>
      </div>
    </div>
  );
};

export default Section3;
