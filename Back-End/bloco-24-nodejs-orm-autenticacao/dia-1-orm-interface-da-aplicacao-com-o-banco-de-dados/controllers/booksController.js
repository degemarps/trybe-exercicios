const bookService = require('../services/booksServices');

const getAll = async (req, res) => {
  const books = await bookService.getAll();

  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await bookService.getById(id);

  return res.status(200).json(book);
};

module.exports = {
  getAll,
  getById
};