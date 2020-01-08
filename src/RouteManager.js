import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Hearthstone from './game/hearthstone/Hearthstone.js';
import Fornite from './game/fornite/Fornite.js';
import Fifa from './game/fifa/Fifa.js';
import LeagueOfLegends from './game/lol/LeagueOfLegends.js';
import TeamfightTactics from './game/tft/TeamfightTactics.js';
import Overwatch from './game/ow/Overwatch.js';
import LandingPage from './LandingPage.js';


function RouteManager() {
  return (
    <Switch>
      <Route path="/hearthstone">
        <Hearthstone />
      </Route>
      <Route path="/fornite">
        <Fornite />
      </Route>
      <Route path="/fifa">
        <Fifa />
      </Route>
      <Route path="/lol">
        <LeagueOfLegends />
      </Route>
      <Route path="/tft">
        <TeamfightTactics />
      </Route>
      <Route path="/ow">
        <Overwatch />
      </Route>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
  )
}

export default RouteManager;