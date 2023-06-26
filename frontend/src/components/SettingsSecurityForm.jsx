import React, { useState } from "react";

const SettingsSecurityForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reTypePassword, setReTypePassword] = useState("");

//   const [formData, setFormData] = useState({
//     email: "",
//     username: "",
//     password: "",
//     reTypePassword: "",
//   });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name == "Email") setEmail(value);
    else if (name == "Username") setUsername(value);
    else if (name == "Password") setPassword(value);
    else if (name == "Re-TypePassword") setReTypePassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = {};
    for (let [name, value] of formData.entries()) {
      values[name] = value;
    }
    // console.log(values);
    // const [data, error] = await updateUserInfo(values);
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
          value={email}
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
          value={username}
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
          value={password}
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
          value={reTypePassword}
          onChange={handleChange}
        />
      </label>

      <button className="settings-submit-btn" type="submit" onSubmit={handleSubmit}>Submit</button>
    </form>
  );
};

export default SettingsSecurityForm;
