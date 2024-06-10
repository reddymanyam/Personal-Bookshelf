import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import BookCard from '../components/BookCard';

const SearchPage = ({ onAdd }) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      const data = await response.json();
      setBooks(data.docs);
    };

    fetchBooks();
  }, [query]);

  return (
    <div className="search-page">
      <Search onSearch={setQuery} />
      <div className="book-results">
        {books.map((book, index) => (
          <BookCard key={index} book={book} onAdd={onAdd} />
        ))}
        <h1 style={{ textAlign: 'center', color: '#007bff', marginTop: '2rem' }}>Search the book whatever you want</h1>
      </div>
    </div>
  );
};

export default SearchPage;


