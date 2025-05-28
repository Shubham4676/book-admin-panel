import React, { useState } from 'react';

const BookTable = ({ books }) => {
  const [page, setPage] = useState(1);
  const [sortAsc, setSortAsc] = useState(true);

  const sorted = [...books].sort((a, b) =>
    sortAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
  );

  const booksPerPage = 5;
  const start = (page - 1) * booksPerPage;
  const paginated = sorted.slice(start, start + booksPerPage);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => setSortAsc(!sortAsc)}>Title {sortAsc ? '↑' : '↓'}</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((book, i) => (
            <tr key={i}>
              <td>{book.title}</td>
              <td>{book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: Math.ceil(books.length / booksPerPage) }).map((_, i) => (
          <button key={i} onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookTable;
