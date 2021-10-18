import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselContainer.css'
// import mainImage from './../assets/images/oilAndGas.png';

const carouselContainer = ({image2,image3,image4}) => {
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
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default carouselContainer;