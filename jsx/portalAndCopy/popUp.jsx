import React from 'react'
import { createPortal } from 'react-dom'
const PopUp = ({ text }) => {
  return createPortal(
    <div
      style={{ position: "absolute", bottom: "20px" }}>
      {`${text} copied to clipboard`}
    </div >
    , document.getElementById("root"))
}

export default PopUp
