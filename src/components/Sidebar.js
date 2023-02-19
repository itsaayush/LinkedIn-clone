import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import splashImg from "../icons/splash_bg.jpg";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItems = (topic) => (
    <div className="sidebar__recentItem">
      <div className="sidebar__hash">#</div>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={splashImg} alt="" />
        <Avatar src={user.profilePic} className="sidebar__avatar">
          {user?.displayName && user?.displayName[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,364</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">944</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("redux")}
        {recentItems("software programming")}
        {recentItems("design")}
        {recentItems("Apple")}
        {recentItems("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
