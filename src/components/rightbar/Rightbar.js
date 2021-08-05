import React from "react";
import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" className="birthdayImg" />
          <span className="birthdaytext">
            <b>Vivek Pandey</b> and <b>4 other friend</b> have birthday today
          </span>
        </div>
        <img src="assets/ads.png" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
      </div>
    </div>
  );
}
