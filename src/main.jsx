// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";

// import { BrowserRouter as Router } from "react-router-dom";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// import "regenerator-runtime/runtime";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App"; // Import your App component
// import "./index.css"; // Import any global styles

// // Rendering the App component inside the root element
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // Import your App component
import "./index.css"; // Import any global styles

// Rendering the App component inside the root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* Wrap your App component with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
