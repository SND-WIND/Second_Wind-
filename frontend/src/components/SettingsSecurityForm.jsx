import React, { useState, useContext } from "react";
import { updateUserInfo } from "../adapters/user-adapter";
import CurrentUserContext from "../contexts/current-user-context";

const SettingsSecurityForm = () => {
  const { currentUser, setCurrentUser, accountType } =
    useContext(CurrentUserContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reTypePassword, setReTypePassword] = useState("");
  const [errorText, setErrorText] = useState("");
  //   const [formData, setFormData] = useState({
  //     email: "",
  //     username: "",
  //     password: "",
  //     reTypePassword: "",
  //   });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name == "email") setEmail(value);
    else if (name == "username") setUsername(value);
    else if (name == "password") setPassword(value);
    else if (name == "re-type_Password") setReTypePassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = { id: currentUser.id };
    for (let [name, value] of formData.entries()) {
      if (value) values[name] = value;
    }
    if (password !== reTypePassword) {
      return setErrorText("Passwords do not match");
    }
    const [data, error] = await updateUserInfo(values);
  };

  return (
    <form onSubmit={handleSubmit} className="settings-forms">
      <h2>Security</h2>
      <label className="form-label">
        Email
        <input
          type="text"
          name="email"
          className="settings-form-class"
          placeholder="Enter your email"
          // value={email}
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        Username
        <input
          type="text"
          name="username"
          className="settings-form-class"
          placeholder="Username"
          // value={username}
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        Password
        <input
          type="text"
          name="password"
          className="settings-form-class"
          placeholder="Type your password"
          // value={password}
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        Re-type Password
        <input
          type="text"
          name="re-type_Password"
          className="settings-form-class"
          placeholder="Re-type your password"
          // value={reTypePassword}
          onChange={handleChange}
        />
      </label>

      <button className="settings-submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SettingsSecurityForm;
