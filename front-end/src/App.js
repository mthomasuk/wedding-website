import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import LandingPage from "./pages/landing";
import DinnerPage from "./pages/dinner";
import AllergyPage from "./pages/allergies";
import SongPage from "./pages/songs";

export default () => (
    <Router>
        <Switch>
            <Route
                exact
                path="/allergies/:key"
                component={AllergyPage}
            />
            <Route
                exact
                path="/dinner/:key"
                component={DinnerPage}
            />
            <Route
                exact
                path="/songs/:key"
                component={SongPage}
            />
            <Route
                exact
                path="/:key"
                component={LandingPage}
            />
            <Route exact path="/" component={LandingPage} />
        </Switch>
    </Router>
);
