import { useContext } from "react";
import Menu from "../components/Menu";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import Messages from "../components/Messages";
import Connections from "../components/Connections";


export default function BookmarksPage() {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (!currentUser) return <Navigate to="/landing" />;
    return (
        <div className="page-container">
            <Menu />
            <h1>Bookmarks!</h1>
            <Messages />
        </div>
    );
}
