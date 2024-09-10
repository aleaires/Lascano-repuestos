import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home.js';
import Shop from './components/Shop';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart';
import { CartProvider } from './components/cartContext';
import ProductDetail from './components/ProductDetail.js';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: '1' }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        
        <div>
          <Footer style={{ position: 'absolute', bottom: 0, width: '100%' }}/>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
