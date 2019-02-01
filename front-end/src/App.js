import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import LandingPage from "./components/landing";

export default () => <Router>
        <Switch>
            <Route exact path={"/:id"} component={LandingPage} />
            <Route exact path={"/"} component={LandingPage} />
        </Switch>
    </Router>;

