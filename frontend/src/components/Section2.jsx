import React from "react";
import featuresIcon from "../SVG/features_icon_white.svg";

const Section2 = () => {
  return (
    <div className="section2-container">
      <div className="section2-left">
        <div className="icon-wrapper">
          <img src={featuresIcon} alt="" width="24px" />
        </div>
        <h2 className="section2-title">
          Get the resources you need to get back to your society{" "}
        </h2>
        <p className="section2-description">
          SecondWind: Your Compass in Reentry. From employment opportunities to
          personal development tools, SecondWind stands as your guide, helping
          you reintegrate with confidence. With SecondWind, transition with
          triumph. Your journey starts here.{" "}
        </p>
      </div>
      <div className="right-boxes">
        <div className="section2-box">
          <img className="section2-box-icon" src={featuresIcon} alt="" />
          <h5 className="section2-box-title">
            Connect with people who understands you
          </h5>
          <p className="section2-box-description">
            Discover a vibrant community of individuals on the same journey as
            you. Share your thoughts, ideas, and experiences, and engage with
            posts from others. Stay updated with exciting events and valuable
            content from various organizations.
          </p>
        </div>

        <div className="section2-box">
          <img className="section2-box-icon" src={featuresIcon} alt="" />
          <h5 className="section2-box-title">Messaging</h5>
          <p className="section2-box-description">
            Connect with others on a personal level. Send direct messages to
            friends, mentors, or potential employers. Ask questions, share
            advice, or simply have a chat. Keep the lines of communication open
            and foster strong relationships.
          </p>
        </div>

        <div className="section2-box">
          <img className="section2-box-icon" src={featuresIcon} alt="" />
          <h5 className="section2-box-title">
            Jobs
          </h5>
          <p className="section2-box-description">
            Unlock a wealth of job opportunities and vocational training. Browse
            through a comprehensive, constantly updated list of job listings.
            Whether you're looking for part-time work, full-time employment, or
            training opportunities, you'll find it here.
          </p>
        </div>

        <div className="section2-box">
          <img className="section2-box-icon" src={featuresIcon} alt="" />
          <h5 className="section2-box-title">News</h5>
          <p className="section2-box-description">
            Stay updated with the latest news and developments concerning
            formerly imprisoned individuals. This feature provides a curated
            collection of news articles, success stories, and relevant updates
            related to the experiences, challenges, and achievements of formerly
            incarcerated people. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
