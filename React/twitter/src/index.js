import React from "react";
import ReactDOM from "react-dom";
import fbase from "./fbase.js";
import App from "./components/App";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
