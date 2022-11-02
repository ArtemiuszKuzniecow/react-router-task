import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { users } from "../users";

const UserPage = () => {
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

export default UserPage;
