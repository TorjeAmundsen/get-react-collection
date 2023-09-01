import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import "./assets/CrocodileGame.css";
import "./assets/Magic8Ball.css";
import "./assets/TrafficLight.css";
import "./assets/TaskPlanner.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
