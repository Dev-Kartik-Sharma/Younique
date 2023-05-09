import React from 'react'

const columnFlex = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
}

const Column = ({children}) => {
  return (
    <>
        <div style={columnFlex}>
            {children}
        </div>
    </>
  )
}

export default Column