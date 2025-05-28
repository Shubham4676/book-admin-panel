const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  price: String,
});

module.exports = mongoose.model('Book', bookSchema);
