import React from "react";
// import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, backNow, anotherVariant }) {
  
  return <div className="child" style={{ backgroundColor: backNow }} onClick={onChangeColor} />;
}

export default Child;
