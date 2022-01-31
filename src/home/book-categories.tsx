import React from 'react';

import { bookCategories } from '../helpers/mock-data/book-categories.js';

import './index.scss';

interface ICategoryProps {
  label: string
  icon: string
}

const Category = ({ label, icon }: ICategoryProps) => (
  <div className="product-category bg-chili-light px-5 py-4">
    <div className="font-size-12 text-primary-indigo">
      <i className={`${icon} cat-icon`} />
    </div>
    <div>
      <h5 className="text-truncate fw-bold">{label}</h5>
      <a href="#" className="stretched-link text-dark">Shop Now</a>
    </div>
  </div>
)

const BookCategories = () => {
  const renderCategories = () => {
    console.log(bookCategories);
    return bookCategories.map(i =>
      <Category label={i.name} icon={i.icon} />
    );
  }

  return (
    <div>
      <header className="mb-4 mt-5 d-md-flex justify-content-between align-items-center">
        <h2 className="font-size-7 mb-3 mb-md-0">Featured Categories</h2>
        <a href="../shop/v1.html" className="h-primary d-block">All Categories <i className="glyph-icon flaticon-next" /></a>
      </header>

      <div className="d-flex cat-holder">
        {renderCategories()}
      </div>
    </div>
  );

}

export default BookCategories;