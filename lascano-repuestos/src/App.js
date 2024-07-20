import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home.js';
import Shop from './components/Shop';
import AboutUs from './components/AboutUs';
import ProductDetail from './components/ProductDetail.js';
import './styles/App.css';

function AdminRedirect() {
  useEffect(() => {
    window.location.replace('http://localhost:3001');
  }, []);

  return null; // No renderiza nada
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/admin" element={<AdminRedirect />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
