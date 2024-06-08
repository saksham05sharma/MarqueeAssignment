import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import BookItem from '../components/BookItem';
import '../styles/styles.css';

const BookSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery?.length > 2) {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}&limit=10&page=1`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setSearchResults(data.docs);
        } catch (error) {
          console.error(error);
          setError('Failed to fetch search results. Please try again later.');
        } finally {
          setLoading(false);
        }
      }
    };
    fetchSearchResults();
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const addedToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf') || '[]');
    return bookshelf.find((sbook) => sbook.key === book.key);
  };

  const handleAddToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf') || '[]');
    if (!bookshelf.find((sbook) => sbook.key === book.key)) {
      bookshelf.push(book);
      localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
      window.location.reload(); // Reload the page after adding a book to the bookshelf
    }
  };

  return (
    <div>
      <Header />
      <SearchBar searchQuery={searchQuery} onSearchInputChange={handleSearchInputChange} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className='results'>
          <ul>
            {searchResults?.map((book) => (
              <BookItem 
                key={book?.key} 
                book={book} 
                onAddToBookshelf={handleAddToBookshelf} 
                isAdded={addedToBookshelf(book)} 
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookSearchPage;
