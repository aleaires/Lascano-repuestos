// src/components/AuthRedirect.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRedirect = ({ isSignup }) => {
  return <Navigate to={isSignup ? "/signup" : "/login"} />;
};

export default AuthRedirect;
