import React, { useState, useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { updateUserInfo } from "../adapters/user-adapter";
import addInfoIllustration from "../SVG/Anything/add-info-illustration.svg";
import "../styles/AdditionalInfo.css";

const AdditionalInfo = () => {
  const { currentUser, setCurrentUser, accountType } =
    useContext(CurrentUserContext);
  const [location, setLocation] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (accountType === "user") {
        
      const [user, error] = await updateUserInfo({
        id: currentUser.id,
        location,
        sex,
        age,
        status,
        aboutMe,
      });
      setCurrentUser(user);
    }
    
      if (error) return setError(error.statusText);
      navigate("/");
    }

    return (
      <div className="additional-info-page">
        <h1 className="add-info-title">
          Tell Us More <br />
          About Yourself
        </h1>
        <form onSubmit={handleSubmit} className="add-info-form">
          <div className="add-form-left">
            <label className="add-info-label">
              Location
              <input
                className="add-info-input"
                type="text"
                value={location}
                placeholder="City, State or Country"
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </label>

            <label className="add-info-label">
              Sex
              <input
                className="add-info-input"
                type="text"
                value={sex}
                placeholder="Male, Female or Others"
                onChange={(e) => setSex(e.target.value)}
                required
              />
            </label>

            <label className="add-info-label">
              Age
              <input
                className="add-info-input"
                type="number"
                value={age}
                placeholder="Enter your age"
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </label>

            <label className="add-info-label">
              Status
              <input
                className="add-info-input"
                type="text"
                value={status}
                placeholder="Formerly Incarcerated or Family"
                onChange={(e) => setStatus(e.target.value)}
                required
              />
            </label>
            <button type="submit" className="get-started-btn">
              Get Started
            </button>
          </div>

          <div className="form-right">
            <label className="add-info-label">About Me</label>
            <textarea
              className="add-info-aboutme"
              value={aboutMe}
              placeholder="Tell us about yourself..."
              onChange={(e) => setAboutMe(e.target.value)}
            />
          </div>

          {error && <p>{error}</p>}
        </form>
        <div
          className="add-info-illustration"
          style={{ backgroundImage: `url(${addInfoIllustration})` }}
        ></div>
      </div>
    );
  };
export default AdditionalInfo;
