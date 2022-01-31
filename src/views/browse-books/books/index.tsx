import React from 'react';

import BookCard from './book-card';

import { books } from '../../../helpers/mock-data/books';

import './index.scss';

const Books = () => {
  const renderBooks = () => {
    return books.map(i => <BookCard {...i} />);
  }

  return (
    <div className="books-wrapper">
      {renderBooks()}
    </div>
  );

}

export default Books;