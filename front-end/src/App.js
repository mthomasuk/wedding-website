import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import LandingPage from "./pages/landing";
import DinnerPage from "./pages/dinner";
import AllergyPage from "./pages/allergies";
import SongPage from "./pages/songs";
import CompletePage from "./pages/complete";
import GiftsPage from "./pages/gifts";
import HotelsPage from "./pages/hotels";

export default () => (
    <Router>
        <Switch>
            <Route exact path="/hotels" component={HotelsPage} />
            <Route exact path="/directions" component={HotelsPage} />
            <Route exact path="/allergies/:key" component={AllergyPage} />
            <Route exact path="/complete/:key" component={CompletePage} />
            <Route exact path="/dinner/:key" component={DinnerPage} />
            <Route exact path="/gifts/:key" component={GiftsPage} />
            <Route exact path="/songs/:key" component={SongPage} />
            <Route exact path="/:key" component={LandingPage} />
            <Route exact path="/" component={LandingPage} />
        </Switch>
    </Router>
);
