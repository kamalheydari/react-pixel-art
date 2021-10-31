import React from "react";

//? Components
import Pixel from "./Pixel";
//? Styles
import "../styles/row.scss";
import { useGlobalContext } from "../context/context";

const Row = () => {
  const { panelWidth } = useGlobalContext();
  let pixels = [];

  for (let i = 0; i < panelWidth; i++) {
    pixels.push(<Pixel key={i} />);
  }
  return <div className="row">{pixels}</div>;
};

export default Row;
