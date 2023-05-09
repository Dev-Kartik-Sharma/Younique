import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  padding: 13px 32px;
  min-width: 120px;
  max-width: 255px;
  background: #f03023;
  color: #ffffff;
  cursor: pointer;
  font-weight: 600;
  line-height: 22px;
  border: none;
  transition: 0.25s ease-in-out;
  &:hover {
    background: #000000;
  }
  &:hover img {
    transform: translateX(3px);
  }
`;

const StyledButton = ({ buttonText, buttonIcon }) => {
  return (
    <Button>
      {buttonText}
      <img
        src={buttonIcon}
        alt=""
        style={{ transition: "transform 0.5s ease-in-out" }}
      />
    </Button>
  );
};

export default StyledButton;
