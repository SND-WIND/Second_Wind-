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
    const [user, error] = await logUserIn(
      Object.fromEntries(formData.entries())
    );
    if (error) return setErrorText(error.statusText);
    setCurrentUser(user);
    navigate(`/`);
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <>
      <div className="login-Form1">
        <div id="logo-black">
          <img src={logo} alt="" />
        </div>
        <h1 className="loginH2">Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="login-username"
              autoComplete="username"
              name="username"
              placeholder="Username"
              size="35"
              // value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              autoComplete="current-password"
              name="password"
              id="login-password"
              placeholder="Password"
              size="35"
              // value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" id="login-submit" size="35">
            Submit
          </button>
          <div className="login-createAccount">
            Dont have an account?
            <Link to="/sign-up">
              <div className="login-createlink" href="">
                Create account
              </div>
            </Link>
          </div>
        </form>
        {!!errorText && <p>{errorText}</p>}
      </div>
    </>
  );
}

{
  /* <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" autoComplete="username"  name="username" />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          autoComplete="current-password"
          id="password"
          name="password"
        />

      <button>Log in!</button>
    </form>
    { !!errorText && <p>{errorText}</p> } */
}
