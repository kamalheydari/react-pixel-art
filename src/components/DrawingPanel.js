import React from "react";
import { useRef } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

//? Context
import { useGlobalContext } from "../context/context";

//? Style
import "../styles/drawingPanel.scss";

//? Components
import Row from "./Row";

const DrawingPanel = () => {
  const { panelHeight } = useGlobalContext();
  const panelRef = useRef();

  let rows = [];

  for (let i = 0; i < panelHeight; i++) {
    rows.push(<Row key={i} />);
  }

  return (
    <div className="drawing-panel">
      <div className="drawing-panel__pixels" ref={panelRef}>
        {rows}
      </div>
      <button
        onClick={() => exportComponentAsPNG(panelRef)}
        className="drawing-panel__btn  button"
      >
        Export as PNG
      </button>
    </div>
  );
};

export default DrawingPanel;
