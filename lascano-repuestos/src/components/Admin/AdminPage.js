import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import './../../styles/AdminPage/AdminPage.css'; // Estilos CSS en línea

function AdminPage() {
  return (
    <div className="admin-page">
      <Sidebar />
      <main className="main-content">
        <Dashboard />
      </main>
    </div>
  );
}

export default AdminPage;
