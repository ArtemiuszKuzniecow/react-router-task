import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { users } from "../users";

const UserPage = () => {
  const { userId } = useParams();
  const currentUser = users.find((u) => u.id === +userId);
  return (
    <div>
      <h1>{currentUser.name + "'s Page"}</h1>
      <p>{currentUser.bio}</p>
      <p>User ID: {userId}</p>
      <NavLink to="/users">Back</NavLink>
      <br />
      <NavLink to={`/users/${userId}/edit`}>Edit</NavLink>
    </div>
  );
};

export default UserPage;
