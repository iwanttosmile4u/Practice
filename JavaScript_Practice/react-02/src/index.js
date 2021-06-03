import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RenderApp } from "./App";
import { Comment } from "./App";
import { Clock } from "./App";
import { NumberList } from "./App";
import { numbers } from "./App";
import { Blog } from "./App";
import { posts } from "./App";
import { Calculator } from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App name="Jane" />
    <RenderApp />
    <Comment
      text="I hope you are enjoy learning react!"
      date="21.05.2021"
      author={{
        name: "Hello Kitty",
        avatarUrl: "https://placekitten.com/g/64/64",
      }}
    />
    <Clock />
    <NumberList numbers={numbers} />
    <Blog posts={posts} />
    <Calculator />
    {/* <App name="Eat shit" surname="Beach" />
    <App name="Ann" surname="Ford" />
    <App name="Tom" surname="Beach" /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
