import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { SkillProvider } from './context';

ReactDOM.render(
  <SkillProvider>
    <Router>
      <App />
    </Router>
  </SkillProvider>,
  document.getElementById('root')
);
