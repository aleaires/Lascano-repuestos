import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { 
    id: 1, 
    name: 'Producto 1', 
    description: 'Descripción breve del producto 1.', 
    image: 'https://via.placeholder.com/150' 
  },
  { 
    id: 2, 
    name: 'Producto 2', 
    description: 'Descripción breve del producto 2.', 
    image: 'https://via.placeholder.com/150' 
  },
  { 
    id: 3, 
    name: 'Producto 3', 
    description: 'Descripción breve del producto 3.', 
    image: 'https://via.placeholder.com/150' 
  },
  { 
    id: 4, 
    name: 'Producto 4', 
    description: 'Descripción breve del producto 4.', 
    image: 'https://via.placeholder.com/150' 
  },
  { 
    id: 5, 
    name: 'Producto 5', 
    description: 'Descripción breve del producto 5.', 
    image: 'https://via.placeholder.com/150' 
  },
  { 
    id: 6, 
    name: 'Producto 6', 
    description: 'Descripción breve del producto 6.', 
    image: 'https://via.placeholder.com/150' 
  },
  { 
    id: 7, 
    name: 'Producto 7', 
    description: 'Descripción breve del producto 7.', 
    image: 'https://via.placeholder.com/150' 
  },
  { 
    id: 8, 
    name: 'Producto 8', 
    description: 'Descripción breve del producto 8.', 
    image: 'https://via.placeholder.com/150' 
  },
  { 
    id: 9, 
    name: 'Producto 9', 
    description: 'Descripción breve del producto 9.', 
    image: 'https://via.placeholder.com/150' 
  },
  { 
    id: 10, 
    name: 'Producto 10', 
    description: 'Descripción breve del producto 10.', 
    image: 'https://via.placeholder.com/150' 
  },
];

function Shop() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <section className="container my-5">
        <h2 className="text-center">Nuestros Productos</h2>
        <div className="row mb-4">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="row">
          {filteredProducts.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">Ver Detalles</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Shop;
