import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import EditUserPage from "./components/EditUserPage";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import UsersListPage from "./components/UsersListPage";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/users/:userId/edit" component={EditUserPage} />
          <Route path="/users/:userId" component={UserPage} />
          <Route path="/users" component={UsersListPage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
