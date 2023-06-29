import React from "react";
import featuresIcon from "../SVG/features_icon_white.svg";
import section3Img from "../SVG/section3_img2_black.jpg";

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
          At Second Wind, we believe in your potential to create positive change
          in your life and the lives of others. With our comprehensive
          resources, supportive community, and valuable opportunities, you can
          build a successful path forward. Don't let your past define you. Take
          control of your destiny and unlock the possibilities that lie ahead.
          You have the power to shape your future and make a lasting impact.
          Together, we can make a difference.
        </p>
      </div>
    </div>
  );
};

export default Section3;
