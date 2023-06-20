import { useContext } from "react";
import Menu from "../components/Menu";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import Messages from "../components/Messages";
import News from "../components/News";

import "../styles/Home.css";

export default function NewsPage() {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (!currentUser) return <Navigate to="/landing" />;
    return (
        <div>
            <Menu />
            <News />
            <Messages />
        </div>
    );
}
