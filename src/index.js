import React from 'react';
import { render } from "react-dom";
import App from './App';
import "normalize.css";
import {GlobalStyles} from "./globalstyle"

render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
