import React from "react";
import ReactDOM from "react-dom/client"; // Asegúrate de que importas desde "react-dom/client"
import App from "./App";
import "./index.css";

// Usamos createRoot para montar la aplicación
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
