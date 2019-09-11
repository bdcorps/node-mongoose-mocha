"use strict";

let fs = require("fs");
let express = require("express");
let app = express();
let bodyParser = require("body-parser");

var mongoose = require("mongoose");

const BookService = require("./book");

mongoose.connect(
  "mongodb://sssaini1:sssaini1@ds147902.mlab.com:47902/booksdb-delete-later"
);

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.engine("html", require("ejs").renderFile);
app.use(express.static(__dirname + "/public"));

app.get("/", async function(req, res, next) {
  try {
    const books = await BookService.listBooks();
    res.json(books);
  } catch (e) {
    next(e);
  }
});

app.get("/c", async function(req, res, next) {
  const name = req.query.name;
  const pages = req.query.pages;

  try {
    const books = await BookService.createBook(name, pages);
    res.json(books);
  } catch (e) {
    next(e);
  }
});

app.get("/fail", async function(req, res, next) {
  next();
});

app.use((req, res, next) => {
  res.status(404).json({ error: "not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;
