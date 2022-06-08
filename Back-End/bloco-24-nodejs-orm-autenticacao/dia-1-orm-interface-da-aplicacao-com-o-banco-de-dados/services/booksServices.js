const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const addBook = async (title, author, pageQuantity) => {
  const newBook = await Book.create({ title, author, pageQuantity });

  return newBook;
};

const editBook = async (id, title, author, pageQuantity) => {
  const bookUpdated = await Book.update(
    { title, author, pageQuantity },
    { where: { id } }
  );

  return bookUpdated;
};

const removeBook = async (id) => {
  const bookRemoved = await Book.destroy({ where: { id } });

  return bookRemoved;
};

module.exports = {
  getAll,
  getById,
  addBook,
  editBook,
  removeBook
};