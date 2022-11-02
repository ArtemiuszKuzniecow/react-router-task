import React from "react";
import { users } from "../users";

const UsersListPage = () => {
  return (
    <div>
      <h1>Users List Page</h1>
      <ul>List</ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {<button>Info</button>}
        </li>
      ))}
      <button>Back</button>
    </div>
  );
};

export default UsersListPage;
