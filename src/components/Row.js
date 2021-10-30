import React from "react";

//? Components
import Pixel from "./Pixel";
//? Styles
import "../styles/row.scss";

const Row = ({ width, selectedColor }) => {
  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
  }
  return <div className="row">{pixels}</div>;
};

export default Row;
