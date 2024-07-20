import React from 'react';

function ProductList({ products }) {
  return (
    <div>
      <h3>Lista de Productos</h3>
      {products.length === 0 ? (
        <p>No hay productos agregados aún.</p>
      ) : (
        <ul className="list-group">
          {products.map((product) => (
            <li key={product.id} className="list-group-item">
              <h5>{product.name}</h5>
              <p>{product.description}</p>
              <img src={product.image} alt={product.name} style={{ height: '50px' }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
