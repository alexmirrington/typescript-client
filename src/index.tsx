import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./components/greeting";

ReactDOM.render(<React.StrictMode>
    <Greeting compiler="TypeScript" framework="React" />
  </React.StrictMode>,
  document.getElementById("content"),
);
