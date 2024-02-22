
import React from 'react';
import { Carousel } from 'react-bootstrap';

function Banner() {
  return (
    <div>
      <Carousel className='container' data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapers.com/images/featured/deadpool-tzhfez1w8ud2z8aw.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wisemadness2.files.wordpress.com/2023/08/oppenheimer-header.jpg?w=1200"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/1199976.jpg"                     
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;