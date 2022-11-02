import React from "react";
import { NavLink } from "react-router-dom";
import { users } from "../users";

const UsersListPage = () => {
  return (
    <div>
      <h1>Users List Page</h1>
      <ul>List</ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {<NavLink to={"/users/" + user.id}>Info</NavLink>}
        </li>
      ))}
      <NavLink to="/">Back</NavLink>
    </div>
  );
};

export default UsersListPage;
