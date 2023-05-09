import React from "react";
import NotificationBar from "../components/NotificationBar";
import NavBar from "../components/NavBar";
import { Container } from "@mui/material";
import HeroSection from "../components/homePageSections/HeroSection";
import OurServices from "../components/homePageSections/OurServices";
import OurClientSays from "../components/homePageSections/OurClientSays";
import VideoPlay from "../components/homePageSections/VideoPlay";
import Resources from "../components/homePageSections/Resources";
import Promotion from "../components/homePageSections/Promotion";
import Footer from "../components/homePageSections/Footer";

const homePage = () => {
  return (
    <>
      {/* <Container
        sx={{
          padding: "0 !important",
          maxWidth: "1440px !important",
        }}
      > */}
        <NotificationBar />
        <NavBar />
        <HeroSection />
        <OurServices />
        <OurClientSays />
        <VideoPlay />
        <Resources />
        <Promotion />
        {/* <Footer /> */}
      {/* </Container> */}
    </>
  );
};

export default homePage;
