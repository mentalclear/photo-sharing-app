import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SignInPage, PrivateRoute } from "./auth";
import { NavBar } from "./navigation";

const routes = [{
  path: "/sign-in",
  Component: SignInPage,
}];

export const Routes = ({isLoading, user}) => (
  <Router> 
    <NavBar user={user}/>
    <Switch>
        {routes.map((route, index) => {
          const RouteType = route.private
          ? PrivateRoute : Route;

          return (
            <RouteType
                key={index}
                path={route.path}
                exact={route.exact}
                isLoading={isLoading}
                isAuthed={!!user}
            >
                <route.Component />
            </RouteType>);
          })}
    </Switch>
  </Router> 
);