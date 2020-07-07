import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(
  <React.StrictMode>
    <App compiler="TypeScript" framework="React" />
  </React.StrictMode>,
  document.getElementById("content")
);
