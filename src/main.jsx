// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./styles.css";
// import "./utils/protection";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import "./utils/protection";

// Disable the browser's own scroll memory. Without this, mobile Safari
// and Chrome will try to restore a previous scroll position on every
// back/forward navigation — which fights with our scroll-to-top and
// makes the page land in random places.
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);