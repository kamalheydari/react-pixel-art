import React, { useState } from "react";

//? Context
import { useGlobalContext } from "../context/context";

//? Styles
import "../styles/pixel.scss";

const Pixel = () => {
  const { selectedColor } = useGlobalContext();

  //? Local States
  const [pixelcolor, setPixelcolor] = useState("#fff");
  const [oldColor, setOldColor] = useState(pixelcolor);
  const [isChangeColor, setIsChangeColor] = useState(true);

  //? handlers
  const applyColor = () => {
    setPixelcolor(selectedColor);
    setIsChangeColor(false);
  };

  const changeColorOnHover = () => {
    setOldColor(pixelcolor);
    setPixelcolor(selectedColor);
  };

  const resetColor = () => {
    if (isChangeColor) {
      setPixelcolor(oldColor);
    } else {
      setIsChangeColor(true);
    }
  };

  return (
    <div
      className="pixel"
      onClick={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
      style={{ background: pixelcolor }}
    ></div>
  );
};

export default Pixel;
