import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import logo from "../SVG/logo_purple.svg";
import home from "../SVG/home_3_fill.svg";
import connect from "../SVG/user_add_fill.svg";
import news from "../SVG/news_fill.svg";
import jobs from "../SVG/briefcase_fill.svg";
import bookmarks from "../SVG/bookmark_fill.svg";
import profile from "../SVG/user_4_fill.svg";
import settings from "../SVG/settings_4_fill.svg";
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Menu() {
  const { currentUser } = useContext(CurrentUserContext);
  const profilePage =
    currentUser.accountType === "user" ? "users" : "businesses";
  return (
    <div className="menu left-item">
      <div className="menu-container">
        <img src={logo} alt="" width="200px" />
        <div className="menu-items">
          <Link to="/">
            <Button variant="text" color="primary">
              <div className="menu-item">
                <img src={home} alt="" />
                <h4>Home</h4>
              </div>
            </Button>
          </Link>

          <Link to="/connect">
            <Button variant="text" color="primary">
              <div className="menu-item">
                <img src={connect} alt="" />
                <h4>Connect</h4>
              </div>
            </Button>
          </Link>
          <Link to="/news">
            <Button variant="text" color="primary">
              <div className="menu-item">
                <img src={news} alt="" />
                <h4>News</h4>
              </div>
            </Button>
          </Link>
          <Link to="/jobs">
            <Button variant="text" color="primary">
              <div className="menu-item">
                <img src={jobs} alt="" />
                <h4>Jobs</h4>
              </div>
            </Button>
          </Link>
          <Link to="/bookmarks">
            <Button variant="text" color="primary">
              <div className="menu-item">
                <img src={bookmarks} alt="" />
                <h4>Bookmarks</h4>
              </div>
            </Button>
          </Link>
        </div>
        <div className="profile-settings">
          <Link to={`/${profilePage}/${currentUser?.id}`}>
            <Button variant="text" color="primary">
              <div className="menu-item">
                <img src={profile} alt="" />
                <h4>Profile</h4>
              </div>
            </Button>
          </Link>
          <Link to="/settings">
            <Button variant="text" color="primary" >
              <div className="menu-item">
                <img src={settings} alt="" />
                <h4>Settings</h4>
              </div>
            </Button>
          </Link>
          <Button variant="contained"  color="primary">
            <div className="menu-item">
            <img  alt="" />
              <h4>Logout</h4>

            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
