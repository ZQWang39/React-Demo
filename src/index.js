import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UseRef from "./components/UseRef/UseRef";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <UseRef />
  </React.StrictMode>,
  document.getElementById("root")
);
