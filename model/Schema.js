"use strict";

const mongoose = require('mongoose');

const books = new mongoose.Schema({
  title: String,
  description: String,
  status: String
})

const BookModel = mongoose.model('books', books)

module.exports = BookModel;
