import React from 'react';

const SearchBar = ({ searchQuery, onSearchInputChange }) => (
  <input
    type="text"
    value={searchQuery}
    onChange={onSearchInputChange}
    placeholder="Search for a book"
    className='input-search'
  />
);

export default SearchBar;
