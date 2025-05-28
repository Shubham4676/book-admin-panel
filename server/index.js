const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

const Book = require('./models/Book');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

app.post('/scrape', async (req, res) => {
  const response = await axios.get('https://books.toscrape.com/');
  const $ = cheerio.load(response.data);
  const books = [];

  $('.product_pod').each((_, el) => {
    const title = $(el).find('h3 a').attr('title');
    const price = $(el).find('.price_color').text();
    books.push({ title, price });
  });

  await Book.deleteMany({});
  await Book.insertMany(books);

  res.json({ success: true });
});

app.listen(5000, () => console.log('Server running on port 5000'));
