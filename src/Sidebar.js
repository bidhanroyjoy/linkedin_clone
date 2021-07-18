import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";


const Sidebar = () => {
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
        <Avatar />
        <h2>Bidhan Roy</h2>
        <h1>Bidhan1999456@gmail.com</h1>
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
