import React from "react";
import { Redirect, Route } from "react-router-dom";
import { users } from "./users";

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
  const result = users.find((u) => u.id === +rest.computedMatch.params.userId);
  return result ? (
    <Route
      {...rest}
      render={(props) => (Component ? <Component {...props} /> : children)}
    />
  ) : (
    <Redirect to="/" />
  );
};

export default ProtectedRoute;
