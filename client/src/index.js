import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { MyThemeProvider } from './themeContext';
import { GlobalStyle } from './globalStyles';

ReactDOM.render(
  <MyThemeProvider>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </MyThemeProvider>,
  document.getElementById('root')
);
