import React from "react";

const rowFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: " 0 -15px",
  flexWrap: "wrap",
};

const Row = ({ children }) => {
  return (
    <>
      <div style={rowFlex}>
        {children}
      </div>
    </>
  );
};

export default Row;
