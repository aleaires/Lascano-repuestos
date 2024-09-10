import React from 'react';
import '../styles/FooterSections.css'; // Asegúrate de tener el archivo CSS
import { Link } from 'react-router-dom';

function FooterSections() {
  return (
    <div className="footer-sections">
      <div className="footer-section">
        <h3 className="widget-title">Información</h3>
        <ul>
          <li><Link to="/about">Quienes Somos</Link></li>
          <li><Link to="/contact">Contáctenos</Link></li>
          <li><Link to="/Condiciones">Condiciones de uso</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="widget-title">Cuenta</h3>
        <ul>
          <li><Link to="/cuenta">Mi cuenta</Link></li>
          <li><Link to="/Historial">Historial de pedidos</Link></li>
          <li><Link to="/carrito">Mi carrito</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="widget-title">Contacto</h3>
        <ul className="address-info">
          <li><a href="https://www.google.com/maps/place/LASCANO+REPUESTOS/@-33.6781678,-54.2111285,15z/data=!4m6!3m5!1s0x950b79ba027fe65d:0xee1eaa0850feee9f!8m2!3d-33.6781678!4d-54.2111285!16s%2Fg%2F11sh1w05xf?entry=ttu"> UBICACIÓN<br /></a>
            Oficinas Central:<br />
            18 de julio - Lascano - URUGUAY<br />
            Tel. (598) .... - ....<br />
            Depósito Principal:<br />
            Dirección montevideo ... - Montevideo - URUGUAY
          </li>
          <li> telefono </li>
          <li> <a href="mailto:mail_de_alguno@lascano.com.uy">mail_de_alguno@lascano.com.uy</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="widget-title">Noticias</h3>
        <label htmlFor="newsletter-email">
          Regístrese en nuestro sitio y vea las últimas ofertas, descuentos y actualizaciones.
        </label>
        <div className="input-group newsletter-details">
          <input type="email" id="newsletter-email" className="form-control" placeholder="Tu email" />
          <button className="btn btn-primary">Suscribirse</button>
        </div>
      </div>
    </div>
  );
}

export default FooterSections;
