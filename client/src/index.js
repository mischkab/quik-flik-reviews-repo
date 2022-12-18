import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Roboto', sans-serif;
  }

  html, body {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
