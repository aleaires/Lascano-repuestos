import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="profile">
        <img src="https://via.placeholder.com/50" alt="Admin" className="profile-img" />
        <h3>John David</h3>
        <p className="status">Online</p>
      </div>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/widgets">Widgets</Link></li>
        <li><Link to="/admin/elements">Elements</Link></li>
        <li><Link to="/admin/tables">Tables</Link></li>
        <li><Link to="/admin/apps">Apps</Link></li>
        <li><Link to="/admin/pricing">Pricing Tables</Link></li>
        <li><Link to="/admin/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
