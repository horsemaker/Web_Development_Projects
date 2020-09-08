import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* basically a function call in jsx */}
  </React.StrictMode>,
  rootElement
);
