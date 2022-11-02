import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import App, { EditUserPage, HomePage, UserPage, UsersListPage } from "./App";
import "./index.css";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Router history={history}>
          <Switch>
            <Route path="/users/:userId/edit" component={EditUserPage} />
            <Route path="/users/:userId" component={UserPage} />
            <Route path="/users" component={UsersListPage} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Router>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
