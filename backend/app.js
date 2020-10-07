const express = require("express");
const bodyParser = require("body-parser");

const Post = require('./models/post');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

// 4UpU8Q80UbyK8tCv

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  res.status(201).json({
    message: 'Post add sucessfully',
  });
});

app.get("/api/posts", (req, res, next) => {
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
