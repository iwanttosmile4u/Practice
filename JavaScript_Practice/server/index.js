// import express from "express"; - ES6
const express = require("express");

const app = express();
const port = 8000;
const emails = [
  { id: 1, topic: "Email 1 topic" },
  { id: 2, topic: "Email 2 topic" },
  { id: 3, topic: "Email 3 topic" },
];

app.get("/api/emails", (req, res) => {
  res.send(emails);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
