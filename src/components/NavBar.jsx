import React from "react";
import theme from "../themes/theme";
import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import ArrowDown from "../assets/ArrowDown.png";
import cart from "../assets/cart.svg";
import StyledButton from "./StyledButton";
import { Container } from "@mui/material";
import "./styles.css";

const navBarFlex = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "80px",
  borderBottom: "0.2px solid #F5F5F5",
};

const navBarItems = {
  display: "flex",
  alignItems: "center",
  gap: "1.9rem",
  fontSize: "13px",
  fontWeight: "700",
  letterSpacing: "0.15px",
  cursor: "pointer",
};

const cartIconStyle = {
  borderRight: "2px solid black",
  borderLeft: "2px solid black",
  padding: "0 1rem",
};

const NavBar = () => {
  return (
    <>
      <Container sx={{padding: "0 !important"}}>
        <div style={navBarFlex}>
          <div>
            <img src={logo} alt="" />
          </div>
          <div style={navBarItems} className="navBarItems">
            <p>
              <img src={home} alt="" />
            </p>
            <p> ABOUT </p>
            <p>
              SERVICES <img src={ArrowDown} alt="" />
            </p>
            <p>
              RESOURCES <img src={ArrowDown} alt="" />
            </p>
            <p> TESTIMONIALS </p>
            <p> MY WEBINARS </p>
            <p> CONTACT US </p>
            <div style={cartIconStyle}>
              <img src={cart} alt="" />
            </div>
            <p> SIGN IN </p>
            <StyledButton buttonText="SIGN UP" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default NavBar;
