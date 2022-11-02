import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { users } from "./users";

export const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
};

export const UsersListPage = () => {
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

export const UserPage = () => {
  const id = useParams().userId;
  const currentUser = users.find((u) => u.id === +id);
  return (
    <div>
      <h1>{currentUser.name + "'s Page"}</h1>
      <p>{currentUser.bio}</p>
      <p>User ID: {id}</p>
      <NavLink to="/users">Back</NavLink>
      <br />
      <NavLink to={`/users/${id}/edit`}>Edit</NavLink>
    </div>
  );
};

export const EditUserPage = () => {
  return <h1>Edit User Page</h1>;
};

function App({ children }) {
  return (
    <div>
      <h2>App Layout</h2>
      {children}
    </div>
  );
}

export default App;
