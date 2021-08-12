import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Welcome } from "./App";
import { App } from "./App";
import { Comment } from "./App";
import { Clock } from "./App";
// import { listItems } from "./App";
// import { NumberList } from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Welcome name="John" />
    <App />
    <Comment
      author={{ avatarUrl: "#", name: "user-picture" }}
      text="Some text"
      date="11.08.2021"
    />
    {/* <ul>{listItems}</ul> */}
    {/* <NumberList /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
