import React from 'react';

interface ICarouselItem {
  src: string
}

const CarouselItem = ({ src }: ICarouselItem) => (
  <div>
    <img src={src} className="img-fluid w-100 banner-item" alt={src} />
  </div>
);

export default CarouselItem;