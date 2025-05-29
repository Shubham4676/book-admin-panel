import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'https://book-admin-panel-1gt6.onrender.com';

// 🏠 Home Component
function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>📚 Welcome to Book Scraper</h1>
      <button onClick={() => navigate('/admin')} className="scrape-button">
        Go to Admin Panel
      </button>
    </div>
  );
}

// 📋 Admin Panel Component
function AdminPanel() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

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

  return (
    <div className="container">
      <h1>📚 Book Admin Panel</h1>
      <button onClick={handleScrape} disabled={loading} className="scrape-button">
        {loading ? 'Scraping...' : 'Scrape Now'}
      </button>
      <button onClick={() => navigate('/')} className="back-button" style={{ marginLeft: '1rem' }}>
        ← Back
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

// 🔁 Main App with Routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
