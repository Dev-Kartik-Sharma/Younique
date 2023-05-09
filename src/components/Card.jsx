import { Typography } from '@mui/material'
import React from 'react'

const Card = ({cardImg, cardTitle, cardSubTitle}) => {
  return (
    <>
      <div className="cardFlex">
        <img src={cardImg} alt="" />
        <Typography variant="h3">{cardTitle}</Typography>
        <Typography variant="subtitle2" sx={{minHeight: "160px"}}>{cardSubTitle}</Typography>
        <p> Learn More... </p>
      </div>
    </>
  );
}

export default Card