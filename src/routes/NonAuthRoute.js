import React from "react";
import { Navigate } from "react-router";

function NonAuthRoute(props) {
  const isAuthenticated = false; //change this based on user logged in status

  return isAuthenticated ? <Navigate to={"/"} /> : props.children;
}

export default NonAuthRoute;
