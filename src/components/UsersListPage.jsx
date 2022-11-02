import React from "react";
import { users } from "../users";
import { NavLink } from "react-router-dom";

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
    </div>
  );
};

export default UsersListPage;
