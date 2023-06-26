import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";
import { createBusiness } from "../adapters/business-adapter";
import AccountBox from "../components/AccountBox";
import logo from "../SVG/logo_purple.svg";
import "../styles/SignUp.css";
import { Button } from "@mui/material";


export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, accountType } =
    useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleAccountTypeClick = (event) => {
    setShowForm(true);
  };

  if (currentUser) return <Navigate to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");
    if (password !== passwordConfirm) setErrorText("Passwords do not match");
    if (accountType === "user") {
      const [user, error] = await createUser({
        username,
        fullName,
        email,
        password,
      });
      setCurrentUser(user);
      if (error) return setErrorText(error.statusText);
    }

    if (accountType === "business") {
      const [business, error] = await createBusiness({
        username,
        companyName: fullName,
        email,
        password,
      });
      setCurrentUser(business);
      if (error) return setErrorText(error.statusText);
    }

    navigate("/additional-info");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    if (name === "full-name") setFullName(value);
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
    if (name === "password-confirm") setPasswordConfirm(value);
  };

  return (
    <div className="sign-up-container">
      {!showForm && (
        <div
          className="header-two-boxes-container"
          style={{ minHeight: showForm ? "auto" : "600px" }}
        >
          <img src={logo} alt="Logo" className="signup-logo" />
          <h1 className="signup-header">Sign Up</h1>
          <main className="container">
            <AccountBox
              type="Personal"
              showForm={() => setShowForm(true)}
              text="Experience the power of Second Wind by signing up for a personal account. Join a supportive online community where you can share your thoughts, connect with others who understand your journey, and access valuable resources for successful reintegration. "
            />
            <AccountBox
              type="Organization"
              showForm={() => setShowForm(true)}
              text="Join Second Wind as an organization and contribute to the successful reintegration of individuals impacted by the criminal justice system. By signing up for an organization account, you can connect and share valuable resources, job listings, and educational materials. "
            />
          </main>
        </div>
      )}
      {showForm && (
        <div className="signUp-container">
          <div className="sign-up-img-personal">
            <img src="" alt="" />
          </div>
          <div className="signUp-Form-Right">
            <form
              className="signUp-Form"
              onSubmit={handleSubmit}
              onChange={handleChange}
            >
              <h1>Sign Up</h1>
              <label htmlFor="email">Email</label>
              <input
                autoComplete="off"
                type="email"
                placeholder="Enter Email"
                id="email"
                className="signUp-Input-Box"
                name="email"
                onChange={handleChange}
                value={email}
                required
              />

              <label htmlFor="full-name">Full Name</label>
              <input
                placeholder=" Enter Full Name"
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
                autoComplete="off"
                type="password"
                placeholder="Enter Password"
                id="password"
                className="signUp-Input-Box"
                name="password"
                onChange={handleChange}
                value={password}
                required
              />

              <label htmlFor="password-confirm">Password Confirm</label>
              <input
                autoComplete="off"
                type="password"
                placeholder="Re-type Password"
                id="password-confirm"
                className="signUp-Input-Box"
                name="password-confirm"
                onChange={handleChange}
                value={passwordConfirm}
                required
              />
              <Button variant="contained" color="black" className="signupbtn btn">Sign Up Now!</Button>
              <h5>
                Already have an account with us?{" "}
                <Link to="/login" className="signup-link">
                  Login
                </Link>
              </h5>
            </form>
            {!!errorText && <p>{errorText}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
