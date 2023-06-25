import React, { useState } from "react";

const SettingsSecurityForm = () => {
  const [formData, setFormData] = useState({
    "email": "",
    "username": "",
    "password": "",
    "reTypePassword": "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="settings-forms">
        <h2>Security</h2>
      <label className="form-label">
        Email
        <input
          type="text"
          name="Email"
          className="settings-form-class"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        Username
        <input
          type="text"
          name="Username"
          className="settings-form-class"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        Password
        <input
          type="text"
          name="Password"
          className="settings-form-class"
          placeholder="Type your password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        Re-type Password
        <input
          type="text"
          name="Re-Type Password"
          className="settings-form-class"
          placeholder="Re-type your password"
          value={formData.reTypePassword}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SettingsSecurityForm;
