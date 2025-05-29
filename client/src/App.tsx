import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'https://book-admin-panel-1gt6.onrender.com';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const fetchBooks = async () => {
    const res = await axios.get(`${API_URL}/books`);
    setBooks(res.data);
  };

  const handleScrape = async () => {
    setLoading(true);
    setMessage('');
    try {
      await axios.post(`${API_URL}/scrape`);
      await fetchBooks();
      setMessage('✅ Books scraped and updated successfully!');
    } catch (err) {
      setMessage('❌ Failed to scrape books.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <h1>📚 Book Admin Panel</h1>
      <button onClick={handleScrape} disabled={loading} className="scrape-button">
        {loading ? 'Scraping...' : 'Scrape Now'}
      </button>
      {message && <p className="message">{message}</p>}
      <table className="book-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book: any, index: number) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
