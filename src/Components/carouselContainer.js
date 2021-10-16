import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselContainer.css'
import mainImage from './../assets/images/oilAndGas.png';
import image2 from './../assets/images/banner2.jpg';
import image3 from './../assets/images/banner3.jpg';
import image4 from './../assets/images/banner4.png';

const carouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image4}
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image2}
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image3}
        />=
      </Carousel.Item>
    </Carousel>
  )
}

export default carouselContainer;