import React from 'react';
import BookItem from './BookItem';

const Bookshelf = () => {
  const bookshelf = JSON.parse(localStorage.getItem('bookshelf') || '[]');

  return (
    <div className='bookshelf'>
      <h1 className='centered'>My <span className='highlight'>Bookshelf</span></h1>
      <ul>
        {bookshelf?.map((book) => (
          <BookItem key={book.key} book={book} isAdded={true} />
        ))}
      </ul>
    </div>
  );
};

export default Bookshelf;
