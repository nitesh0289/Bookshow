import React from "react";
import { Navigate } from "react-router";

function AuthRoute(props) {
  const isAuthenticated = true;

  return isAuthenticated ? props.children : <Navigate to={"/login"} />;
}

export default AuthRoute;
