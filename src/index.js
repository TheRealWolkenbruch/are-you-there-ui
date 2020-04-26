import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

ReactDOM.render(
  //<React.StrictMode>
  <App />,
  //</React.StrictMode>
  document.getElementById("root")
);
