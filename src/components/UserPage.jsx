import React from "react";
import { users } from "../users";

const UserPage = () => {
  const currentUser = users.find((u) => u.id === +userId);
  return (
    <div>
      <h1>{currentUser.name + "'s Page"}</h1>
      <p>{currentUser.bio}</p>
      <p>User ID: {userId}</p>
      <button>Back</button>
      <br />
      <button>Edit</button>
    </div>
  );
};

export default UserPage;
