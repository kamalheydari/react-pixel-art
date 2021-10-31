import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  //?Global States
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [isOptions, setIsOptions] = useState(false);
  const [isDrawingPanel, setIsDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setSelectedColor] = useState("#f44336");

  //? Handlers
  const initializeDrawingPanel = () => {
    setIsOptions(!isOptions);
    setIsDrawingPanel(!isDrawingPanel);

    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing");
  };

  const changeColor = (color) => {
    setSelectedColor(color.hex);
  };

  return (
    <AppContext.Provider
      value={{
        panelWidth,
        setPanelWidth,
        panelHeight,
        setPanelHeight,
        isOptions,
        setIsOptions,
        isDrawingPanel,
        setIsDrawingPanel,
        buttonText,
        selectedColor,
        setSelectedColor,
        setButtonText,
        initializeDrawingPanel,
        changeColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//? Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
