const createBook = Book => (name, noOfPages) => {
  if (!name || !noOfPages) throw new Error("Error");
  const book = new Book(name, noOfPages);
  return book.save();
};

const listBooks = Book => () => {
  return Book.find({});
};

module.exports = Book => {
  return {
    createBook: createBook(Book),
    listBooks: listBooks(Book)
  };
};
