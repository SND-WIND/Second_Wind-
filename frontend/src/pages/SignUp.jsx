import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";
import "../styles/SignUp.css";
import logo from "../SVG/logo_purple.svg";

// Controlling the signup form is a good idea because we want to adde (eventually)
// more validation and provide real time feedback to the user about usernames and passwords
export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [sex, setSex] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  // We could also use a single state variable for the form data:
  // const [formData, setFormData] = useState({ username: '', password: '' });
  // What would be the pros and cons of that?

  if (currentUser) return <Navigate to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");
    if (password !== passwordConfirm)
      return setErrorText("Passwords do not match");
    const [user, error] = await createUser({
      username,
      fullName,
      sex,
      email,
      password,
    });
    if (error) return setErrorText(error.statusText);

    setCurrentUser(user);
    navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    if (name === "full-name") setFullName(value);
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
    if (name === "password-confirm") setPasswordConfirm(value);
    if (name === "sex") setSex(value);
  };

  return (
    <>
      <div className="signUp-container">
        <div className="signUP-Image-Right">
          <img id="signUp-logo-purple" src={logo} alt="Logo" className="logo" />
        </div>
        <div className="signUp-Form-Left">
          <form
            className="signUp-Form"
            onSubmit={handleSubmit}
            onChange={handleChange}
          >
            <div className="signUpForm-Container">
              <h1 id="h1">Sign Up</h1>
              <label htmlFor="email">Email</label>
              <input
                placeholder="Enter Email"
                autoComplete="off"
                type="email"
                id="email"
                className="signUp-Input-Box"
                name="email"
                onChange={handleChange}
                value={email}
                required
              />

              <label htmlFor="full-name">Full Name</label>
              <input
                placeholder="Full Name"
                autoComplete="off"
                type="text"
                id="full-name"
                className="signUp-Input-Box"
                name="full-name"
                onChange={handleChange}
                value={fullName}
                required
              />

              <label htmlFor="username">Username</label>
              <input
                placeholder="Enter Username"
                autoComplete="off"
                type="text"
                id="username"
                className="signUp-Input-Box"
                name="username"
                onChange={handleChange}
                value={username}
                required
              />

              <label htmlFor="password">Password</label>
              <input
                placeholder="Enter Password"
                autoComplete="off"
                type="password"
                id="password"
                className="signUp-Input-Box"
                name="password"
                onChange={handleChange}
                value={password}
                required
              />

              <label htmlFor="password-confirm">Password Confirm</label>
              <input
                placeholder="Repeat Password"
                autoComplete="off"
                type="password"
                id="password-confirm"
                className="signUp-Input-Box"
                name="password-confirm"
                onChange={handleChange}
                value={passwordConfirm}
                required
              />
              <div class="clearfix">
              <button type="submit" class="signupbtn">
                Sign Up
              </button>
            </div>
              <p>
                Already have an account with us?{" "}
                <Link to="/login">Log in!</Link>
              </p>
            </div>
          </form>
          {!!errorText && <p>{errorText}</p>}
        </div>
      </div>
    </>
  );
}
