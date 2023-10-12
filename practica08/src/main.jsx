import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
//import "./index.css";
import MiFieldset from "./MiFieldset.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*<App />*/}
    <MiFieldset titulo="Datos personales" text1="Nombre" text2="Password" />
  </React.StrictMode>
);
