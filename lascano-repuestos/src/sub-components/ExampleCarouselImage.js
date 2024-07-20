import React from 'react';

function ExampleCarouselImage({ src, alt }) {
  return (
    <section>
      <img
        className="carousel-image"
        src={src}
        alt={alt}
      />
    </section>
  );
}

export default ExampleCarouselImage;
