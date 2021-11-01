import React from "react";
import { CirclePicker } from "react-color";

//? Context
import { useGlobalContext } from "../context/context";

//? Styles
import "../styles/editor.scss";

//? Components
import DrawingPanel from "./DrawingPanel";

//? Images
import pixelArt from "../assets/pixelArt.svg";

const Editor = () => {
  const {
    panelWidth,
    setPanelWidth,
    panelHeight,
    setPanelHeight,
    isOptions,
    isDrawingPanel,
    buttonText,
    selectedColor,
    initializeDrawingPanel,
    changeColor,
  } = useGlobalContext();

  return (
    <div className="editor">
      <div className="editor__bg">
        <img src={pixelArt} alt="pixel art" />
      </div>
      {isDrawingPanel && (
        <h2 className="editor__heading">Enter Panel Dimensions</h2>
      )}
      {isDrawingPanel && (
        <div className="editor__options">
          <div className="editor__input">
            <input
              type="number"
              value={panelWidth}
              max="80"
              min="4"
              onChange={(e) => {
                setPanelWidth(e.target.value);
              }}
            />
            <span>Width</span>
          </div>
          <div className="editor__input">
            <input
              type="number"
              value={panelHeight}
              max="30"
              min="4"
              onChange={(e) => {
                setPanelHeight(e.target.value);
              }}
            />
            <span>Height</span>
          </div>
        </div>
      )}
      <button onClick={initializeDrawingPanel} className="editor__btn button">
        {buttonText}
      </button>

      {isOptions && (
        <CirclePicker
          color={selectedColor}
          onChangeComplete={changeColor}
          className="editor__btn"
        />
      )}

      {isOptions && <DrawingPanel />}
    </div>
  );
};

export default Editor;
