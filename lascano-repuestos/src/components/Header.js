import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ background: 'orange'}}>
      <div className="logo" style={{ color: 'blue', display: 'flex', alignItems: 'center' }}>
        <h1 style={{ marginRight: '10px' }}>Lascano Repuestos</h1>
        <img src="/logo.png" alt="Logo" style={{ height: '50px' }} />
      </div>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '10px' }}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/shop">Tienda</Link></li>
          <li><Link to="/about">Nosotros</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/admin">admin</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
