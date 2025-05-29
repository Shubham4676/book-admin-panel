import axios from 'axios';

const API_URL = 'https://book-admin-panel-1gt6.onrender.com'; // Change to your Render backend later

export const fetchBooks = async () => {
  const res = await axios.get(`${API_URL}/books`);
  return res.data;
};

export const triggerScrape = async () => {
  await axios.post(`${API_URL}/scrape`);
};
