import { useContext, useEffect, useState } from "react";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import Menu from "../components/Menu";
import Feed from "../components/Feed";
import Messages from "../components/Messages";
import PostList from "../components/PostList";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import "../styles/User.css"

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.statusText);
      setUserProfile(user);
    };

    loadUser();
  }, [id]);

  const handleLogout = async () => {
    await logUserOut();
    setCurrentUser(null);
    navigate("/landing");
  };

  if (!currentUser) return <Navigate to="/landing" />;
  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile
    ? currentUser.username
    : userProfile.username;

  return (
    <div className="profile-container">
      <Menu />
      <PostList />
      {/* <h1>{profileUsername}</h1> */}
      {/* {!!isCurrentUserProfile && (
        <button onClick={handleLogout}>Log Out</button>
      )} */}
      {/* <p>If the user had any data, here it would be</p>
      <p>Fake Bio or something</p> */}
      {/* {!!isCurrentUserProfile && (
        <UpdateUsernameForm
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )} */}
      <Messages />
    </div >
  );
}
