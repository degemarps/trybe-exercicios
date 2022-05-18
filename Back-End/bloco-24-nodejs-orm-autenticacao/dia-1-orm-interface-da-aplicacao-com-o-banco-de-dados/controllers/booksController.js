const bookService = require('../services/booksServices');

const getAll = async (req, res) => {
  const books = await bookService.getAll();

  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await bookService.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  return res.status(200).json(book);
};

const addBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  const newBook = await bookService.addBook(title, author, pageQuantity);

  return res.status(200).json(newBook);
};

module.exports = {
  getAll,
  getById,
  addBook
};