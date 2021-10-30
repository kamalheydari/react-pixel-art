import React, { useState } from "react";
import { CirclePicker } from "react-color";

//? Styles
import "../styles/editor.scss";

//? Components
import DrawingPanel from "./DrawingPanel";

const Editor = () => {
  //? States
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setSelectedColor] = useState("#f44336");

  const initializeDrawingPanel = () => {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing");
  };

  const changeColor = (color) => {
    setSelectedColor(color.hex);
  };

  return (
    <div id="editor">
      <h1>Pixel Editor</h1>
      {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
      {hideDrawingPanel && (
        <div id="options">
          <div className="option">
            <input
              type="number"
              defaultValue={panelWidth}
              onChange={(e) => {
                setPanelWidth(e.target.value);
              }}
              className="panelInput"
            />
            <span>Width</span>
          </div>
          <div className="option">
            <input
              type="number"
              defaultValue={panelHeight}
              onChange={(e) => {
                setPanelHeight(e.target.value);
              }}
              className="panelInput"
            />
            <span>Height</span>
          </div>
        </div>
      )}
      <button onClick={initializeDrawingPanel} className="button">
        {buttonText}
      </button>

      {hideOptions && (
        <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
      )}

      {hideOptions && (
        <DrawingPanel
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
        />
      )}
    </div>
  );
};

export default Editor;
