import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function CarouselFadeExample({ images }) {
  return (
    <Carousel fade>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <ExampleCarouselImage
            src={image.src}
            alt={image.alt}
            style={{ width: '500px', height: 'auto' }}
          />
          <Carousel.Caption>
            {/* Puedes añadir más contenido aquí si es necesario */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFadeExample;
