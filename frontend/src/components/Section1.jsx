import React from "react";
import connectIcon from "../SVG/user_add_fill.svg";
import section1Img from "../SVG/mac.png";

const Section1 = () => {
  return (
    <div className="section1-container">
      <div className="section1-left">
        <div className="icon-wrapper">
          <img src={connectIcon} alt="" />
        </div>
        <h2 className="section1-title">
          Connect with people who understand you
        </h2>
        <p className="section1-description">
          Second Wind: Your Community, Your Reintegration. Connect with those
          who truly understand your journey, and rediscover the strength within
          you. In our shared experiences, find the support you need to navigate
          life after incarceration. Because nobody should walk this path alone.
          Join SecondWind today, and move forward together.
        </p>
      </div>
      <div className="section1-right">
        <div
          className="section1-img"
          style={{ backgroundImage: `url(${section1Img})` }}
        ></div>
      </div>
    </div>
  );
};

export default Section1;
