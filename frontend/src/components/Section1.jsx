import React from 'react'
import connectIcon from "../SVG/user_add_fill.svg"
import section1Img from "../SVG/laptop.png"

const Section1 = () => {
  return (
    <div className="section1-container">
      <div className="section1-left">
        <div className="icon-wrapper">
          <img src={connectIcon} alt="" />
        </div>
        <h2 className="section1-title">
          Connect with people who understands you
        </h2>
        <p className="section1-description">
          Lorem ipsum dolor sit amet consectetur. Suspendisse suspendisse tempor
          et ipsum sit egestas nunc. Diam in cum a in. Lorem ipsum dolor sit
          amet consectetur. Suspendisse suspendisse tempor et ipsum sit egestas
          nunc. Diam in cum a in.
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
}

export default Section1;