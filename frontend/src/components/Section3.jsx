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
        To reintegrate into society successfully, it is crucial to access the resources that support your journey. These resources can encompass a wide range of support systems, including educational opportunities, vocational training, counseling services, and community networks.{" "}
        </p>
      </div>
    </div>
  );
};

export default Section3;
