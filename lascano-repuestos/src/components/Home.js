import React from 'react';
import CarouselFadeExample from '../sub-components/CarouselFadeExample';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <section className="hero">
        <h2>Bienvenido a Tienda de repuestos</h2>
        <p>Encuentra los mejores productos aquí.</p>
        <CarouselFadeExample />
        <Link to="/shop" className="btn">Buscar Producto</Link>
      </section>
      <section className="features">
        <div className="feature">
          <h3>Envío Rápido</h3>
          <p>Recibe tu pedido en 24-48 horas.</p>
        </div>
        <div className="feature">
          <h3>Mejor Calidad</h3>
          <p>Productos seleccionados con los más altos estándares.</p>
        </div>
        <div className="feature">
          <h3>Soporte 24/7</h3>
          <p>Estamos aquí para ayudarte en cualquier momento.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
