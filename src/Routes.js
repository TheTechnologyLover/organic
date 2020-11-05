import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Signin from "./screens/Auth/Signin";
import Signup from "./screens/Auth/Signup";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth/signin" exact component={Signin} />
        <Route path="/auth/signup" exact component={Signup} />
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
