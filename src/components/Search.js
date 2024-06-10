import React from 'react';

const Search = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search for books..."
      />
    </div>
  );
};

export default Search;
