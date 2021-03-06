import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";


const Sidebar = () => {

  const user = useSelector(selectUser);

    const recentItem=(topic)=>(
        <div className="sidebar__reacentItem">

        <span className="sidebar__hash">
            #
        </span>
        <p>
            {topic}
        </p>
        </div>
    )
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="./images/img.jpg" alt="" />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h1>{user.email}</h1> 
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewd YOU</p>
           <p className="sidebar__statnumber">3455</p>
        </div>

        <div className="sidebar__stat">
        <p> Views on post</p>
          <p className="sidebar__statnumber">2589</p>
        </div>
      </div>
      <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem("React.js")}
          {recentItem("Programming")}
          {recentItem("Redux.js")}
          {recentItem("Mysql")}
          {recentItem("javascript")}
      </div>
    </div>
  );
}; 

export default Sidebar;
