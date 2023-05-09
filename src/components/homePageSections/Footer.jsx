import React from "react";
import "./styles.css";
import Row from "../Row";
import Column from "../Column";
import footerLogo from "../../assets/footerLogo.svg";
import socialIcon1 from "../../assets/socialIcon1.svg";
import socialIcon2 from "../../assets/socialIcon2.svg";

const Footer = () => {
  return (
    <>
      <div className="footerBG">
        <Row>
          <Column>
            <img src={footerLogo} alt="" />
            <div className="socialIconsFlex">
              <p style={{color: "#FFFFFF"}}> Let's Connect </p>
              <div className="socialIcons">
                <img src={socialIcon1} alt="" />
                <img src={socialIcon2} alt="" />
              </div>
            </div>
          </Column>
        </Row>
      </div>
    </>
  );
};

export default Footer;