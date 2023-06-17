import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import logo from "../SVG/logo_black.svg";
import "../styles/Login.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("");
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const [user, error] = await logUserIn(username, password);
    if (error) return setErrorText(error.statusText);
    setCurrentUser(user);
    navigate("/");
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="input-container">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="button-container">
            <button type="submit">Login</button>
          </div>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
          {!!errorText && <p>{errorText}</p>}
        </form>
      </div>
      <div className="login-image">image</div>
    </>
  );
}
