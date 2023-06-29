import { useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import Menu from "../components/Menu";
import Messages from "../components/Messages";
import ConnectionList from "../components/ConnectionList";
import "../styles/Connection.css";

export default function ConnectPage() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (!currentUser) return <Navigate to="/landing" />;

  return (
    <div className="connect-page">
      <Menu />
      <ConnectionList />
      <Messages />
    </div>
  );
}
