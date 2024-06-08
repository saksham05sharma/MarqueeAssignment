import React from 'react';

const BookItem = ({ book, onAddToBookshelf, isAdded }) => {
  const handleButtonClick = () => {
    if (!isAdded) {
      onAddToBookshelf(book);
    }
  };

  return (
    <li className='book-item'>
      <h2>{book?.title}</h2>
      <p><strong>Author: </strong>{book?.author_name?.[0]}</p>
      <p><strong>Edition Count: </strong>{book?.edition_count}</p>
      <button onClick={handleButtonClick}>
        {isAdded ? 'Already in the Bookshelf' : 'Add to Bookshelf'}
      </button>
    </li>
  );
};

export default BookItem;
