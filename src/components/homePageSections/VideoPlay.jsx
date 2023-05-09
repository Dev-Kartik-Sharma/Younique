import React from "react";
import "./styles.css";
import Heading from "../Heading";
import YouTubeVideo from "../../assets/youtubeVideo.svg";

const VideoPlay = () => {
  return (
    <>
      <div className="videoPlayBG">
        <div className="videoPlayTextBG">
          <div className="videoPlayText">
            <p style={{ fontWeight: 900, fontSize: "40px", color: "#FFFFFF" }}>
              Recruitment Advisor and Coach
            </p>
            <p style={{ fontWeight: 400, fontSize: "20px", color: "#FFFFFF" }}>
              I'm here to help you scale your business with powerful strategies
              so you can make more while doing less.
            </p>
            <p
              style={{
                fontWeight: 600,
                fontSize: "16px",
                color: "#FFFFFF",
                textDecoration: "underline",
                cursor: "pointer"
              }}
            >
              Read More About Sophie
            </p>
          </div>
        </div>
        <div className="videoPlayVideoBG">
          <Heading
            text="Hear From"
            strongText="Sophie Robertson"
            color="#FFFFFF"
          />
          <img src={YouTubeVideo} alt="" />
        </div>
      </div>
      <div className="videoPlayBottomBG">
        <div className="videoPlayBottomFlex">
          <div className="bottomTextItem">
            <b> 15 </b>
            <p> YEARS </p>
          </div>
          <div className="bottomTextItem">
            <b> 22,000 </b>
            <p> COACHING HOURS </p>
          </div>
          <div className="bottomTextItem">
            <b> 270+ </b>
            <p> CLIENTS </p>
          </div>
          <div className="bottomTextItem">
            <b> Over 250 </b>
            <p> MASTERCLASSES </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlay;
