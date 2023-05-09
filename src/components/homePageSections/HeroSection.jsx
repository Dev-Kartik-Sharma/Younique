import React from "react";
import "./styles.css";
import { Typography } from "@mui/material";
import StyledButton from "../StyledButton";
import ArrowForward from "../../assets/ArrowForward.svg";
import heroImg from "../../assets/hero-image.svg";
import { Container } from "@mui/material";

const HeroSection = () => {
  return (
    <>
      <div className="heroSectionFlex">
        <Container sx={{padding: "0 !important"}}>
          <div className="row">
            <div className="heroSectionTextFlex">
              <div className="heroSectionText">
                <Typography variant="h1">
                  Powerful solutions for recruitment
                  <strong> professionals </strong> and
                  <strong> businesses </strong>
                </Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: "1.5rem" }}>
                  Explore the many varied options for you to grow your skills,
                  your team and your business
                </Typography>
                <StyledButton
                  buttonText="BOOK A CALL"
                  buttonIcon={ArrowForward}
                />
              </div>
            </div>
            <div className="heroSectionBG">
              <img src={heroImg} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeroSection;
