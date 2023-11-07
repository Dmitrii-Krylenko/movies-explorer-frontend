import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteElement = ({ islogin }) => {
  return (
    islogin ? <Outlet /> : <Navigate to="/" replace />
  )
}

export default ProtectedRouteElement;