import express from "express";
// const express = require("express");

const app = express();

app.get("/", (request, response) => {
  console.log("get executed");
  response.send("get executed");
});

app.get("/products", (request, response) => {
  console.log("get executed");
  response.send("I got the products");
});

app.get("/helper", (request, response) => {
  console.log("get executed");
  response.send("I got the helper");
});

app.listen(3000, () => {
  console.log("server started at port 3000");
});
