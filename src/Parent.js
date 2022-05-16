import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [newColor, setNewColor] = useState("#FFF");

  function onChangeColor(){
    setColor(getRandomColor())
    setNewColor(getRandomColor())
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={onChangeColor} backNow={newColor}/>
      <Child  onChangeColor={onChangeColor} backNow={newColor}/>
    </div>
  );
}

export default Parent;
