import React from "react";
import Card from "../Card";
import Heading from "../Heading";
import cardImg1 from "../../assets/cardImg1.svg";
import cardImg2 from "../../assets/cardImg2.svg";
import cardImg3 from "../../assets/cardImg3.svg";
import cardImg4 from "../../assets/cardImg4.svg";
import "./styles.css";
import { Container } from "@mui/material";

const OurServices = () => {
  return (
    <>
      <div
        style={{
          background: "#f5f5f5",
          clipPath: "polygon(2px 109px, 100.18% 168px, 100% 98.61%, 0px 100%)",
        }}
      >
        <Container>
          <div className="ourServicesBG">
            <div className="ourServicesHeading">
              <Heading text="Our" strongText="Services" color="#000000" />
            </div>
            <div className="cardsFlex">
              <Card
                cardImg={cardImg1}
                cardTitle="Masterclasses"
                cardSubTitle="Workshops where you can learn the tips and tools to be successful"
              />
              <Card
                cardImg={cardImg2}
                cardTitle="Coaching/Mentoring"
                cardSubTitle="One on one coaching to accelerate and cement your insights and learnings for rapid results"
              />
              <Card
                cardImg={cardImg3}
                cardTitle="Training"
                cardSubTitle="Group bespoke training delivered via face-to-face or virtually"
              />
              <Card
                cardImg={cardImg4}
                cardTitle="Advisory"
                cardSubTitle="You may be a start up or an established company looking for particular expertise on your Board or you may want someone to bounce ideas off as running a business can be a lonely affair"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OurServices;
