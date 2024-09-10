import { React, useState, useEffect, useContext  } from 'react';
import { useParams, Link} from 'react-router-dom';

const addToCart = (product) => {
  const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = currentCart.find(item => item.id === product.id);
  if (existingProduct) {
    const updatedCart = currentCart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  } else {
    const updatedCart = [...currentCart, { ...product, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }
};

function ProductDetail() {
  const { id } = useParams();
  const [products, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/productos?id=${id}`);
        const data = await response.json();
        setProduct(data);
        console.log(data);
        //const product = products.find(p => p.id === parseInt(id));
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);
  

  if (!products) {
    return (
      <div className="container my-5">
        <h2>Producto no encontrado</h2>
        <Link to="/" className="btn btn-primary">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="card"  class="d-flex justify-content-between">
        <img src={products[0].image_url} className="card-img-top" class="w-50 p-3" alt={products[0].nombre} />
        <div className="card-body">
          <h5 className="card-title">Producto: {products[0].nombre}</h5>
            <div class="d-flex justify-content-between mt-4">
              <div>
                <h5 className="card-title">Descripción</h5>
                <p className="card-text">{products[0].descripcion}</p>
              </div>
              <div>
                <h5 className="card-title">Precio por unidad:</h5>
                <p className="card-text">$ {products[0].precio}</p>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <Link to="/shop" className="btn btn-primary">Volver a la tienda</Link>
              <button onClick={() => addToCart(products[0])} className="btn btn-primary">Agregar al Carrito</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
