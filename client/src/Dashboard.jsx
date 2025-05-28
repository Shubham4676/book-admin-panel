import React, { useEffect, useState } from 'react';
import BookTable from './BookTable';
import { fetchBooks, triggerScrape } from './api';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  const handleScrape = async () => {
    setLoading(true);
    await triggerScrape();
    const data = await fetchBooks();
    setBooks(data);
    setLoading(false);
  };

  return (
    <div>
      <h2>Book Dashboard</h2>
      <button onClick={handleScrape}>{loading ? 'Scraping...' : 'Scrape Now'}</button>
      <BookTable books={books} />
    </div>
  );
};

export default Dashboard;
