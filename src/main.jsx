import React from "react";
import ReactDOM from "react-dom/client";
import ReactModal from "react-modal";

import "modern-normalize";
import "./components/css/index.css";

import App from "./App.jsx";

// Set the root app element for accessibility
ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
