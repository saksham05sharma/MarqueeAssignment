import React from 'react';

const Header = () => (
  <div className='header'>
    <h1 className='project-name'>YourShelf</h1>
    <button onClick={() => window.location.href = '/bookshelf'} className='view-bookshelf-button'>View Bookshelf</button>
  </div>
);

export default Header;
