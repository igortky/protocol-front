import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import Unauthorized from "./pages/Unauthorized/unauthorized";

function Routes() {
  return (
    < BrowserRouter >
      <Switch>
        <Route exact path="/:token" component={FrontPage} />
        <Route path="/" component={Unauthorized} />
      </Switch>
    </BrowserRouter >
  )
};

export default Routes;