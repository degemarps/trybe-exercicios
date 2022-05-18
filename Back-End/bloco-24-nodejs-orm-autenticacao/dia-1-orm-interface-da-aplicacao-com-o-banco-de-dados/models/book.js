'use strict';
const {
  Model
} = require('sequelize');

const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER
  });

  return Book;
};

module.exports = Book;