import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import UseRef from "./components/UseRef/UseRef";
// import SearchFilter from "./components/SearchFilter/SearchFilter.jsx";
import { BrowserRouter } from "react-router-dom";
import { FavoritesContextProvider } from "./components/store/FavoritesContext.jsx";

ReactDOM.render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
        {/* <UseRef />
    <SearchFilter /> */}
      </BrowserRouter>
    </FavoritesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
