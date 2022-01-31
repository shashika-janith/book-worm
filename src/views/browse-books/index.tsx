import React from 'react';
import Books from './books';

const BrowseBooks = () => {


  return (
    <div>
      <header className="mb-4 mt-5 d-md-flex justify-content-between align-items-center">
        <h2 className="font-size-7 mb-3 mb-md-0">New Releases</h2>
        <a href="../shop/v1.html" className="h-primary d-block">All Books <i className="glyph-icon flaticon-next" /></a>
      </header>

      <Books />
    </div>
  );

}

export default BrowseBooks;