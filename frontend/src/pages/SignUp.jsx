import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";
import "../styles/SignUp.css";
import logo from "../SVG/logo_purple.svg";

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
  const [accountType, setAccountType] = useState("");
  const [showForm, setShowForm] = useState(false);

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
    if(name === "sex") setSex(value);
  };

  const handleAccountTypeClick = (event) => {
    setAccountType(event.target.value);
    setShowForm(true);
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label htmlFor="email">Email</label>
        <input
          autoComplete="off"
          type="email"
          id="email"
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
          autoComplete="off"
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />

        <label htmlFor="password-confirm">Password Confirm</label>
        <input
          autoComplete="off"
          type="password"
          id="password-confirm"
          name="password-confirm"
          onChange={handleChange}
          value={passwordConfirm}
          required
        />

        {/* In reality, we'd want a LOT more validation on signup, so add more things if you have time
        <label htmlFor="password-confirm">Password Confirm</label>
        <input autoComplete="off" type="password" id="password-confirm" name="passwordConfirm" />
      */}

        <button>Sign Up Now!</button>
      </form>
      {!!errorText && <p>{errorText}</p>}
      <p>
        Already have an account with us? <Link to="/login">Log in!</Link>
      </p>
    </>
  );
}