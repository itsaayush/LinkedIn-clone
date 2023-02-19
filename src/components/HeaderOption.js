import { Avatar } from "@mui/material";
import React from "react";
import "./HeaderOption.css";
import { useSelector } from "react-redux";
import avatarIcon from "../icons/avatar.jpg";
import { selectUser } from "../features/userSlice";

function HeaderOption({ Icon, title, avatar, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={() => onClick()} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          src={user ? user.profilePic : avatarIcon}
          className="headerOption__icon"
        >
          {user?.displayName && user?.displayName[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
