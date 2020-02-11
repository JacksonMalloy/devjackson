import React from "react";
import { ThemeProvider } from "styled-components";

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

const Theme_Capilano = {
  highlightcolor: "#1b61a9",
  primary: "#f4f4f4",
  subprimary: "#333333",
  backgroundcolor: "#ffffff",
  desktopMax: "1700px",
  tabletMax: "950px",
  mobileMax: "555px"
};

const HSLTheme_Capilano = {
  highlightcolor: "#66abf2",
  primary: "#090909",
  subprimary: "#f5f5f5",
  backgroundcolor: "#000000",
  desktopMax: "1700px",
  tabletMax: "950px",
  mobileMax: "555px"
};

const Theme_SFU = {
  highlightcolor: "#b5111b",
  primary: "#f8f8f8",
  subprimary: "#010101",
  backgroundcolor: "#ffffff",
  desktopMax: "1700px",
  tabletMax: "950px",
  mobileMax: "555px"
};

const HSLTheme_SFU = {
  highlightcolor: "#ffaeb9",
  primary: "#090909",
  subprimary: "#f9f9f9",
  backgroundcolor: "#000000",
  desktopMax: "1700px",
  tabletMax: "950px",
  mobileMax: "555px"
};

const Theme_UBC = {
  highlightcolor: "#002145",
  primary: "#f5f5f5",
  subprimary: "#000000",
  backgroundcolor: "#f2f2f2",
  desktopMax: "1700px",
  tabletMax: "950px",
  mobileMax: "555px"
};

const HSLTheme_UBC = {
  highlightcolor: "#c7e4fe",
  primary: "#090909",
  subprimary: "#f9f9f9",
  backgroundcolor: "#000000",
  desktopMax: "1700px",
  tabletMax: "950px",
  mobileMax: "555px"
};

const Theme_Douglas = {
  highlightcolor: "#004d23",
  primary: "#f8f8f8",
  subprimary: "#010101",
  backgroundcolor: "#ffffff",
  desktopMax: "1700px",
  tabletMax: "950px",
  mobileMax: "555px"
};

const HSLTheme_Douglas = {
  highlightcolor: "#90d1a6",
  primary: "#090909",
  subprimary: "#f9f9f9",
  backgroundcolor: "#000000",
  desktopMax: "1700px",
  tabletMax: "950px",
  mobileMax: "555px"
};

export const MyThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = React.useState({
    mode: Theme_UBC
  });

  const mode = themeState.mode;

  const toggle = () => {
    if (mode === Theme_SFU) {
      let mode = themeState.mode === Theme_SFU ? HSLTheme_SFU : Theme_SFU;
      setThemeState({ mode: mode });
    }

    if (mode === HSLTheme_SFU) {
      let mode = themeState.mode === HSLTheme_SFU ? Theme_UBC : HSLTheme_SFU;
      setThemeState({ mode: mode });
    }

    if (mode === Theme_UBC) {
      let mode = themeState.mode === Theme_UBC ? HSLTheme_UBC : HSLTheme_SFU;
      setThemeState({ mode: mode });
    }

    if (mode === HSLTheme_UBC) {
      let mode =
        themeState.mode === HSLTheme_UBC ? Theme_Douglas : HSLTheme_UBC;
      setThemeState({ mode: mode });
    }

    if (mode === Theme_Douglas) {
      let mode =
        themeState.mode === HSLTheme_Douglas ? Theme_Douglas : HSLTheme_Douglas;
      setThemeState({ mode: mode });
    }

    if (mode === Theme_Capilano) {
      const mode =
        themeState.mode === Theme_Capilano ? HSLTheme_Capilano : Theme_Capilano;
      setThemeState({ mode: mode });
    }

    if (mode === HSLTheme_Capilano) {
      let mode =
        themeState.mode === HSLTheme_Capilano ? Theme_SFU : HSLTheme_Capilano;
      setThemeState({ mode: mode });
    }

    if (mode === HSLTheme_Douglas) {
      let mode =
        themeState.mode === HSLTheme_Douglas
          ? Theme_Capilano
          : HSLTheme_Douglas;
      setThemeState({ mode: mode });
    }
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider theme={themeState.mode}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
