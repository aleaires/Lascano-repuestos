import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';



function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/productos');
        console.log(response);
        const data = await response.json();
        console.log(data);
        setProducts(data);
        console.log(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
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
                <img src={product.image_url} className="card-img-top" alt={product.nombre} />
                <div className="card-body">
                  <h5 className="card-title">{product.nombre}</h5>
                  <p className="card-text">{product.descripcion}</p>
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
