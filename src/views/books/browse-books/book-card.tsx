import React from 'react';
import { formatNumber } from '../../../helpers/data-formatter';

interface IBookCard {
  coverImg: string
  title: string
  type: string
  author: string
  price: number
}

const BookCard = ({ coverImg, title, type, author, price }: IBookCard) => {

  return (
    <div className="book-card c-pointer">
      <img
        src="/assets/images/banners/book-1.png"
        className="img-fluid d-block mx-auto"
        alt="image-description" />

      <div className="mt-2">
        <div className="text-uppercase mb-1 text-truncate type">
          {type}
        </div>
        <h5 className="mb-1 crop-text-2 title">
          {title}
        </h5>
        <div className="mb-1 text-truncate">
          {author}
        </div>
        <div className="price d-flex align-items-center fw-medium">
          <span className="amount"><span className="currency">LKR</span> {formatNumber(price)}</span>
        </div>
      </div>
    </div>
  );

}

export default BookCard;