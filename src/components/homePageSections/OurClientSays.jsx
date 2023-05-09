import React from "react";
import Heading from "../Heading";
import clientImg from "../../assets/clientImg.svg";
import quote from "../../assets/quote.svg";
import { Typography } from "@mui/material";
import clientIcon1 from "../../assets/clientIcon1.svg";
import clientIcon2 from "../../assets/clientIcon2.svg";
import clientIcon3 from "../../assets/clientIcon3.svg";
import clientIcon4 from "../../assets/clientIcon4.svg";
import clientIcon5 from "../../assets/clientIcon5.svg";

const OurClientSays = () => {
  return (
    <>
      <div className="ourClientSaysBG">
        <div className="ourClientsHeading">
          <Heading
            text="What Our Clients Say About"
            strongText="Younique Coaching"
            color="black"
          />
        </div>
        <div className="clientContentFlex">
          <div className="clientImg">
            <img src={clientImg} alt="" />
          </div>
          <div className="clientReviewFlex">
            <div className="clientDetails">
              <Typography variant="subtitle2">
                <b> Richard Fimmano </b> <br />
                Recruitment Consultant | Construction & Fitout
              </Typography>
              <div className="clientReviewText">
                <img src={quote} alt="" />
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 300, lineHeight: 1.5 }}
                >
                  I am honestly struggling to put into words how great Sophie
                  has been for my growth and development. The knowledge and
                  wisdom she comes with has taught me so much in such little
                  time. I absolutely love her delivery and teaching methods,
                  everything about it I can not fault. I absolutely love her
                  delivery and teaching methods, everything about it I
                </Typography>
                <p> Read more </p>
              </div>
            </div>
          </div>
          <div className="clientIcons">
            <img src={clientIcon1} alt="" />
            <img src={clientIcon2} alt="" />
            <img src={clientIcon3} alt="" />
            <img src={clientIcon4} alt="" />
            <img src={clientIcon5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClientSays;
