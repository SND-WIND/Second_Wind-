import React, { useState } from "react";
import { updateUserInfo } from "../adapters/user-adapter";

const SettingsUserForm = () => {
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("");

    // const [formData, setFormData] = useState({
    //   fullName: fullName,
    //   location: location,
    //   sex: sex,
    //   age: age,
    //   status: status,
    // });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name == "Full Name") setFullName(value);
    else if (name == "Location") setLocation(value);
    else if (name == "Sex") setSex(value);
    else if (name == "Age") setAge(value);
    else if (name == "Status") setStatus(value);
  };

  //Need Controllers for this
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = {};
    for (let [name, value] of formData.entries()) {
      values[name] = value;
    }
    console.log(values)
    const [data, error] = await updateUserInfo(values);
  };

  return (
    <form onSubmit={handleSubmit} className="settings-forms">
      <h2>User Info</h2>
      <label className="form-label">
        Full Name
        <input
          type="text"
          name="Full Name"
          className="settings-form-class"
          placeholder="Full Name"
          value={fullName}
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        Location
        <input
          type="text"
          name="Location"
          className="settings-form-class"
          placeholder="City, State"
          value={location}
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        Sex
        <input
          type="text"
          name="Sex"
          className="settings-form-class"
          placeholder="Male, Female or Others"
          value={sex}
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        Age
        <input
          type="text"
          name="Age"
          className="settings-form-class"
          placeholder="Enter your age"
          value={age}
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        Status
        <input
          type="text"
          name="Status"
          className="settings-form-class"
          placeholder="Formerly Incarcerated"
          value={status}
          onChange={handleChange}
        />
      </label>

      <button
        className="settings-submit-btn"
        type="submit"
        onSubmit={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default SettingsUserForm;
