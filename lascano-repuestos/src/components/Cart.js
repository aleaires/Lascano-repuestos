// Cart.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css'; // Importa el archivo CSS

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Carrito de compras</h2>
        {cart.length === 0 ? (
          <p>Tu carrito esta vacio.</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image_url} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details d-flex align-items-start flex-column">
                    <h4>{item.nombre}</h4>
                    <p>{item.category}</p>
                    <Link to={`/product/${item.id}`} className="btn" >Ver Detalles</Link>
                    <p onClick={() => removeFromCart(item.id)}>Remove</p>
                  </div>
                  <div className="cart-item-quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    />
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <div className="cart-item-price">
                    <p>{item.precio} $</p>
                  </div>
                  <div className="cart-item-total">
                    <p>{(item.precio * item.quantity).toFixed(2)} $</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h3>Resumen de compra</h3>
              <p>Productos: {cart.length}</p>
              <p>Total: {totalPrice.toFixed(2)} $</p>
              <div class="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={clearCart}>Limpiar carrito</button>
                <Link to="/checkout" className="btn btn-primary">Hacer pedido</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
