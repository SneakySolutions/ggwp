import React from "react";
import {
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
import GameType from './game/GameType.js';


function GameRouteManager() {
  return (
    <Switch>
      <Route path="/hearthstone/:name" component={Hearthstone}/>
      <Route path="/fornite/:name" component={Fornite}/>
      <Route path="/fifa/:name" component={Fifa}/>
      <Route path="/lol/:name" component={LeagueOfLegends}/>
      <Route path="/tft/:name"component={TeamfightTactics}/>
      <Route path="/ow/:name" component={Overwatch}/>
      <Route path="/:game" component={GameType}/>
      <Route path="/" component={LandingPage}/>
    </Switch>
  )
}

export default GameRouteManager;