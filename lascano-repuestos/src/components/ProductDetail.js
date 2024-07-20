import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from './Products'; // Asegúrate de que la ruta sea correcta

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container my-5">
        <h2>Producto no encontrado</h2>
        <Link to="/" className="btn btn-primary">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <Link to="/" className="btn btn-primary">Volver a la tienda</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
