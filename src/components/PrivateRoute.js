import React, { useContext } from "react";
import { Outlet , Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = () => {
  const {currentUser} = useContext(AuthContext);

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
  
};


export default PrivateRoute