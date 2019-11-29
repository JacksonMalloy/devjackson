import React from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

const lightTheme = {
  highlightcolor: '#1b61a9',
  primary: '#f4f4f4',
  subprimary: '#333333',
  backgroundcolor: '#ffffff',
  desktopMax: '1700px',
  tabletMax: '950px',
  mobileMax: '555px'
};

const HSLTheme = {
  highlightcolor: '#66abf2',
  primary: '#090909',
  subprimary: '#f5f5f5',
  backgroundcolor: '#000000',
  desktopMax: '1700px',
  tabletMax: '950px',
  mobileMax: '555px'
};

const orangeTheme = {
  highlightcolor: '#FF7F00',
  primary: '#620000',
  subprimary: '#FFFF9B',
  backgroundcolor: '#272727',
  desktopMax: '1700px',
  tabletMax: '950px',
  mobileMax: '555px'
}

const blackWhiteTheme = {
  highlightcolor: '#cccccc',
  primary: '#090909',
  subprimary: '#f9f9f9',
  backgroundcolor: '#000000',
  desktopMax: '1700px',
  tabletMax: '950px',
  mobileMax: '555px'
};

export const MyThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = React.useState({
    mode: lightTheme
  });

  const mode = themeState.mode;

  const toggle = () => {
    if (mode === lightTheme) {
      const mode = themeState.mode === lightTheme ? HSLTheme : lightTheme;
      setThemeState({ mode: mode });
    }

    if (mode === HSLTheme) {
      let mode = themeState.mode === HSLTheme ? orangeTheme : HSLTheme;
      setThemeState({ mode: mode });
    }

    if (mode === orangeTheme) {
      let mode = themeState.mode === orangeTheme ? blackWhiteTheme : orangeTheme;
      setThemeState({ mode: mode });
    }

    if (mode === blackWhiteTheme) {
      let mode = themeState.mode === blackWhiteTheme ? lightTheme : blackWhiteTheme;
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
