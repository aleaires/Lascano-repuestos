import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('/api/check-auth');
        setAuthenticated(response.data.authenticated);
      } catch (error) {
        console.error('Error al verificar autenticación:', error);
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <Route
      {...rest}
      element={authenticated ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
