import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://book-admin-panel-1gt6.onrender.com';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    const res = await axios.get(`${API_URL}/books`);
    setBooks(res.data);
  };

  const handleScrape = async () => {
    setLoading(true);
    await axios.post(`${API_URL}/scrape`);
    await fetchBooks();
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📚 Book Admin Panel</h1>
      <button onClick={handleScrape} disabled={loading}>
        {loading ? 'Scraping...' : 'Scrape Now'}
      </button>
      <table border={1} cellPadding={10} style={{ marginTop: '1rem' }}>
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
