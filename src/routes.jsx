import React from "react";
import { Navigate } from "react-router-dom";
import EditUserPage from "./components/EditUserPage";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import UsersListPage from "./components/UsersListPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/users",
    children: [
      {
        index: true,
        element: <UsersListPage />,
      },
      {
        path: ":userId",
        children: [
          {
            index: true,
            element: <UserPage />,
          },
          {
            path: "edit",
            element: <EditUserPage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default routes;
