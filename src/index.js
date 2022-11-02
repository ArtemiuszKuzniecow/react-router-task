import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import App from "./App";
import EditUserPage from "./components/EditUserPage";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import UsersListPage from "./components/UsersListPage";
import "./index.css";
import ProtectedRoute from "./protectedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/users/:userId/edit" component={EditUserPage} />
          <ProtectedRoute path="/users/:userId" component={UserPage} />
          <Route path="/users" component={UsersListPage} />
          <Route path="/" exact component={HomePage} />

          <Redirect to="/" />
        </Switch>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
