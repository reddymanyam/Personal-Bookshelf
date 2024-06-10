import React, { useState } from 'react';

const BookCard = ({ book, onAdd }) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToWishlist = () => {
    onAdd(book);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000); // Hide notification after 2 seconds
  };

  return (
    <div style={styles.bookCard}>
      <h3>{book.title}</h3>
      <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
      <button style={styles.addButton} onClick={handleAddToWishlist}>Add to Wishlist</button>
      {showNotification && <div style={styles.notification}>Added to Wishlist!</div>}
    </div>
  );
};

export default BookCard;

const styles = {
  bookCard: {
    position: 'relative',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '1rem',
    margin: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: 'calc(100% / 3 - 2rem)'
  },
  addButton: {
    backgroundColor: '#0073e6',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  notification: {
    position: 'absolute',
    top: '-40px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#28a745',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'top 0.3s ease'
  }
};

