import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { users } from "../users";

export const EditUserPage = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>Edit User Page</h1>

      <NavLink to={`/users/${userId}`}>Back to User Page</NavLink>
      <br />
      <NavLink
        to={`/users/${
          users.find((u) => u.id === +userId + 1) ? +userId + 1 : +userId - 1
        }`}
      >
        Another User Page
      </NavLink>
      <br />
      <NavLink to="/users">Back to Users List</NavLink>
    </div>
  );
};

export default EditUserPage;
