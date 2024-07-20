import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import { getUserName } from '../apis/getUserName';
import './../../styles/AdminPage/AdminPage.css'; // Estilos CSS en línea

const AdminPage = () => {
  const [userName, setUserName] = useState('');
  const [userStatus, setUserStatus] = useState('Online'); // Puedes definir el estado del usuario según tus necesidades

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const { nombre, apellido } = await getUserName();
        console.log('Nombre de usuario recibido:', { nombre, apellido });
        setUserName(`${nombre} ${apellido}`);
      } catch (error) {
        console.error('Error fetching user name:', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <div className="admin-page">
      <Sidebar userName={userName} userStatus={userStatus} />
      <main className="main-content">
        <Dashboard />
      </main>
    </div>
  );
};

export default AdminPage;
