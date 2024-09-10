import React, { useState, useEffect } from 'react';
import './HorizontalCarousel.css';

function HorizontalCarousel({ images }) {
  const itemsPerPage = 5;
  const numItems = images.length;
  const [currentIndex, setCurrentIndex] = useState(3);

  // Función para mover al siguiente índice
  const moveToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numItems);
  };

  // Configurar el intervalo para mover automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(moveToNext, 3000);
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  // Generar las imágenes a mostrar
  const getDisplayedImages = () => {
    const displayedImages = [];
    for (let i = 0; i < itemsPerPage; i++) {
      displayedImages.push(images[(currentIndex + i) % numItems]);
    }
    return displayedImages;
  };

  return (
    <div className="horizontal-carousel">
      <div className="carousel-wrapper">
        <div className="carousel-inner">
          {getDisplayedImages().map((img, index) => (
            <img
              key={index}
              className="d-block"
              src={img.src}
              alt={img.alt}
              style={{ width: `${100 / itemsPerPage}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HorizontalCarousel;
