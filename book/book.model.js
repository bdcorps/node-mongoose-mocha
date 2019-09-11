var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  name: String,
  noOfPages: Number
});

var bookModel = mongoose.model("book", bookSchema, "book");

module.exports = bookModel;
