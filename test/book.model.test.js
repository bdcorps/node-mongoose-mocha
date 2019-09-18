var mongoose = require("mongoose");
const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;

var mongodb =
  "mongodb://sssaini1:sssaini1@ds125716.mlab.com:25716/testing-later";
mongoose.connect(mongodb);
const Book = require("../book/book.model");

describe("Book Model", () => {
  before(async () => {
    await Book.remove({});
  });

  after(async () => {
    await Book.remove({});
    await mongoose.connection.close();
  });

  it("has a module", () => {
    expect(Book).to.not.be.undefined;
  });

  describe("get user", () => {
    it("gets a user", async () => {
      const book = new Book({ name: "what", numOfPages: 10 });
      await book.save();

      const foundBook = await Book.findOne({ name: "what" });
      const expected = "what";
      const actual = foundBook.name;
      expect(actual).equal(expected);
    });
  });

  describe("save user", () => {
    it("saves a user", async () => {
      const book = new Book({ name: "what", numOfPages: 10 });
      const savedBook = await book.save();

      const expected = "what";
      const actual = savedBook.name;
      expect(actual).equal(expected);
    });
  });

  describe("update user", () => {
    it("updates a user", async () => {
      const book = new Book({ name: "what", numOfPages: 10 });
      await book.save();

      book.name = "what2";
      const updatedBook = await book.save();

      const expected = "what2";
      const actual = updatedBook.name;
      expect(actual).equal(expected);
    });
  });
});
