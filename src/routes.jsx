import React from "react";
import EditUserPage from "./components/EditUserPage";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import UsersListPage from "./components/UsersListPage";

const routes = [
  {
    path: "",
    element: <HomePage />,
    children: [
      {
        path: "users",
        element: <UsersListPage />,
        children: [
          {
            path: ":userId",
            element: <UserPage />,
            children: [
              {
                path: "edit",
                element: <EditUserPage />,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
