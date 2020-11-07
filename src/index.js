import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import IndexComponent from "./components/NewQuarkCamera";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<IndexComponent />, document.getElementById("root"));
serviceWorker.unregister();
