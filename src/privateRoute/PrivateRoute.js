
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({ children }) => {
    const {user}= useAuth()
    const location = useLocation();

    if (user?.email) {
        return children;
      
    }
  
    return <Navigate to="/login" replace state={{ from: location }}/>;
  };

export default PrivateRoute;