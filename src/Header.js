import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = () => {
  return (
    <div className="header">
      
      <div className="header__left">
        <img
          src="https:www.flaticon.com/svg/static//icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon} title="my network"/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={ChatIcon} title="Messaging"/>
          <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
          <HeaderOption avatar="https://www.kindpng.com/imgv/TTwRwoo_avatar-avatar-male-user-icon-hd-png-download/"
              title="me"
          />
      </div>
    </div>
  );
};

export default Header;
