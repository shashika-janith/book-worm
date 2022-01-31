import React from 'react';
import CarouselItem from './carousel-item';
import Slider from 'react-slick';

import './index.scss';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        <CarouselItem key={1} src="/assets/images/banners/banner-1.jpg" />
      </Slider>
    </div>
  );

}

export default Carousel;