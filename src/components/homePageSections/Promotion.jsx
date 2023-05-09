import React from "react";
import StyledButton from "../StyledButton";
import ArrowForward from "../../assets/ArrowForward.svg";
import "./styles.css";

const Promotion = () => {
  return (
    <>
      <div className="promotionBG">
        <div className="promotionHeading">
          <p style={{fontSize: "56px", fontWeight: "300"}}>
            Let's work together to grow you and your <b style={{fontSize: "64px"}}> business </b>
          </p>
          <StyledButton buttonText="WORK WITH SOPHIE" buttonIcon={ArrowForward}/>
        </div>
      </div>
    </>
  );
};

export default Promotion;
