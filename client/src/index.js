import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { MyThemeProvider } from './themeContext';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h1 {
    color: ${props => props.theme.subprimary};
  }
`;

ReactDOM.render(
  <MyThemeProvider>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </MyThemeProvider>,
  document.getElementById('root')
);
