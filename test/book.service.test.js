const BookService = require("../book/book.service");
const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;

describe("book service test", () => {
  it("has a module", () => {
    expect(BookService).to.not.be.undefined;
  });

  describe("book service test", () => {
    it("list books", async () => {
      const MockModel = {
        find: sinon.spy()
      };
      const bookService = BookService(MockModel);
      bookService.listBooks();

      const expected = true;
      const actual = MockModel.find.calledOnce;
      expect(actual).equal(expected);
    });
  });

  describe("createBook book service test", () => {
    it("create book", async () => {
      let name;
      let pages;
      const save = sinon.spy();

      const MockModel = function(data) {
        name = data.name;
        numOfPages = data.pages;
        return { ...data, save };
      };

      const bookService = BookService(MockModel);
      bookService.createBook("name", 10);
      const expected = true;
      const actual = save.calledOnce;
      expect(actual).equal(expected);
    });
  });
});
