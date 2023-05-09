import { Typography } from "@mui/material";
import React from "react";
import "./styles.css";

const Heading = ({ text, strongText, color }) => {
  return (
    <>
      <div className="headingDiv">
        <Typography variant="h2" color={color}>
          {text} <br /> <span> {strongText} </span>
        </Typography>
      </div>
    </>
  );
};

export default Heading;
