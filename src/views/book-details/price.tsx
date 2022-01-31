import React from 'react';

import './index.scss';

interface IProps {
  price: number;
  discountedPrice: number;
}

const Price = ({ price, discountedPrice }: IProps) => (
  <div className="price-wrapper">
    <bdi className="mr-2 price">{price}</bdi>
    <bdi className="price-dis">{discountedPrice}</bdi>
  </div>
);



export default Price;