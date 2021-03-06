import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>widgets</h2>
        
        <InfoIcon />
      </div>
     {newsArticle("React is back", "Top news 9899 readers")} 
      {newsArticle("Roy is back", "Top news 9899 readers")}
      {newsArticle("cryptocurrency is back", "Top news 9899 readers")}
      {newsArticle("tesla is back", "Top news 9899 readers")}
    </div>
  );
}

export default Widgets;
