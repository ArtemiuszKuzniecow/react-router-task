import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
};

export default HomePage;
