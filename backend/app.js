const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "xsdsdsd",
      title: "First server-side port",
      content: "this is content",
    },
    {
      id: "aaaaaa",
      title: "Second server-side port",
      content: "this is content 2",
    },
  ];
  res.status(200).json({
    message: "succesfully",
    posts,
  });
});

module.exports = app;
