import React from 'react';

const Bookshelf = ({ books }) => {
  return (
    <div className="bookshelf">
      <h2>My Bookshelf</h2>
      {books.length === 0 ? (
        <p>No books in your shelf yet.</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <h3>{book.title}</h3>
              <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookshelf;
