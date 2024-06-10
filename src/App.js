import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import BookshelfPage from './pages/BookshelfPage';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState(() => {
    const savedBooks = localStorage.getItem('bookshelf');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  }, [bookshelf]);

  const addBookToShelf = (book) => {
    setBookshelf((prevBooks) => [...prevBooks, book]);
  };

  const removeBookFromShelf = (bookToRemove) => {
    setBookshelf((prevBooks) =>
      prevBooks.filter((book) => book.key !== bookToRemove.key)
    );
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Search</Link>
          <Link to="/bookshelf">My Bookshelf</Link>
        </nav>
        <Routes>
          <Route path="/" element={<SearchPage onAdd={addBookToShelf} />} />
          <Route path="/bookshelf" element={<BookshelfPage books={bookshelf} onRemove={removeBookFromShelf} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
