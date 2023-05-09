import { Typography } from "@mui/material";
import React from "react";
import resourcesImg from "../../assets/resourcesImg.svg";
import { Container } from "@mui/material";

const Resources = () => {
  return (
    <>
      <Container>
        <div className="resourcesBG">
          <div className="resourcesHeading">
            <b style={{ fontSize: "56px", fontWeight: "900" }}> Resources </b>
            <p style={{ fontSize: "20px", fontWeight: "400" }}>
              Everything you need to know about how to set up and grow an
              on-hire temp and contractor desk
            </p>
          </div>
          <div className="resourcesContentFlex">
            <div className="resourcesImg">
              <img src={resourcesImg} alt="" />
            </div>
            <div className="resourcesTextBlock">
              <p style={{ marginBottom: "1rem" }}> BOOK </p>
              <b> Secrets To Running A Lucrative Temp Desk </b>
              <p> By Sophie Robertson (Author) </p>
              <Typography variant="subtitle2">
                In this comprehensive book full of real-life case studies and
                based on many years of personal experience and success, Sophie
                Robertson outlines the processes involved in running a highly
                lucrative temp desk, which will both strengthen your client
                relationships and ensure you become the employer of choice for
                top-quality temps.
              </Typography>
              <div className="borderButton"> BUY NOW $49.99 </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Resources;
