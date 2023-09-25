import React from "react";
import { Navigate } from "react-router-dom";

const RouterProtector = ({ element }) => {
  const token= localStorage.getItem("Token");

  return token ? element : <Navigate to="/signin" />;
};

export default RouterProtector;