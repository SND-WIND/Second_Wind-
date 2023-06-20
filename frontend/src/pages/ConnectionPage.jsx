import { useContext } from "react";
import Menu from "../components/Menu";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import Messages from "../components/Messages";
import Connections from "../components/Connections";
import "../styles/Home.css";
import "../styles/reset.css";

export default function ConnectPage() {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (!currentUser) return <Navigate to="/landing" />;
    return (
        <div>
            <Menu />
            <Connections />
            <Messages />
        </div>
    );
}
