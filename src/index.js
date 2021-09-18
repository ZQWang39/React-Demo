import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import UseRef from "./components/UseRef/UseRef";
// import SearchFilter from "./components/SearchFilter/SearchFilter.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <UseRef />
    <SearchFilter /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
