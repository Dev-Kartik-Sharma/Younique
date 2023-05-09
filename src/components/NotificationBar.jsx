import { Container } from "@mui/material";
import React from "react";
import theme from "../themes/theme";

const notifyBarFlex = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  height: "32px",
  // background: theme.palette.primary.main,
  // padding: "0 3rem",
};

const notifyBarContent = {
  display: "flex",
  justifyContent: "space-between",
  width: "400px",
  fontSize: "12px",
  fontWeight: "700",
  color: theme.palette.secondary.main,
};

const NotificationBar = () => {
  return (
    <>
      <div style={{background: "#000000", width: "100vw"}}>
        <Container sx={{padding: "0 !important"}}>
          <div style={notifyBarFlex}>
            <div style={notifyBarContent}>
              <p> + 61 448 173 307 </p>
              <p> sophie@youniquecoaching.com.au </p>
              <p> Request a Demo </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NotificationBar;
