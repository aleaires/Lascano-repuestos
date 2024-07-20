import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const Sidebar = ({ userName, userStatus }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirigir a la página de login o a la página principal después del logout
      // Ejemplo de redirección a la página de login
      return <Navigate to="/login" />;
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <nav className="sidebar">
      <div className="profile">
        <img src="https://via.placeholder.com/50" alt="Admin" className="profile-img" />
        <h3>{userName}</h3>
        <p className="status">{userStatus}</p>
      </div>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/widgets">Widgets</Link></li>
        <li><Link to="/admin/elements">Elements</Link></li>
        <li><Link to="/admin/tables">Tables</Link></li>
        <li><Link to="/admin/apps">Apps</Link></li>
        <li><Link to="/admin/pricing">Pricing Tables</Link></li>
        <li><Link to="/admin/contact">Contact</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
