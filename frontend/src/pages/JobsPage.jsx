import { useEffect, useContext } from "react";
import Menu from "../components/Menu";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import Messages from "../components/Messages";
import JobFeed from "../components/JobFeed"
import "../styles/Jobs.css";

export default function JobsPage() {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (!currentUser) return <Navigate to="/landing" />;
    return (
        <div className="jobs-page">
            <Menu />
            <JobFeed />
            <Messages />
        </div>
    );
}
