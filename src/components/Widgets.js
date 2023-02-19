import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subTitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subTitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Aliens Spotted", "Top news - 8987 readers")}
      {newsArticle("ChatGPT", "Top news - 9999 readers")}
      {newsArticle("Elon Musk going to Moon!", "Trending - 5332 readers")}
      {newsArticle("BTC hits new low", "Crypto - 6746 readers")}
      {newsArticle("Harry Potter is a horcrux", "Trending - 2341 readers")}
    </div>
  );
}

export default Widgets;
