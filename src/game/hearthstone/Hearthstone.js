import React from 'react';
import '../common/brackets-tree.css';
import './hearthstone.css';

class Hearthstone extends React.Component {
  render() {
    return (
      <div>
        <div class="bg-image-hearthsone"></div>
        <div class="brackets">
          <h2>Gaming tournament test 2019</h2>
          <turnament id="tournament">
          <ul class="round round-1">
            <li class="spacer">&nbsp;</li>
            
            <li class="game game-top winner">Sneaky <span>82</span></li>
            <li class="game game-spacer">&nbsp;</li>
            <li class="game game-bottom looser">Colo St <span>56</span></li>

            <li class="spacer">&nbsp;</li>
            
            <li class="game game-top winner">Oregon <span>74</span></li>
            <li class="game game-spacer">&nbsp;</li>
            <li class="game game-bottom looser">Saint Louis <span>57</span></li>

            <li class="spacer">&nbsp;</li>
            
            <li class="game game-top looser">Memphis <span>48</span></li>
            <li class="game game-spacer">&nbsp;</li>
            <li class="game game-bottom winner">Mich St <span>70</span></li>

            <li class="spacer">&nbsp;</li>
            
            <li class="game game-top looser">Creighton <span>50</span></li>
            <li class="game game-spacer">&nbsp;</li>
            <li class="game game-bottom winner">Duke <span>66</span></li>

            <li class="spacer">&nbsp;</li>
          </ul>
          <ul class="round round-2">
            <li class="spacer">&nbsp;</li>
            
            <li class="game game-top winner">Sneaky <span>77</span></li>
            <li class="game game-spacer">&nbsp;</li>
            <li class="game game-bottom looser">Oregon <span>69</span></li>

            <li class="spacer">&nbsp;</li>
            
            <li class="game game-top looser">Mich St <span>61</span></li>
            <li class="game game-spacer">&nbsp;</li>
            <li class="game game-bottom winner">Duke <span>71</span></li>

            <li class="spacer">&nbsp;</li>
          </ul>
          <ul class="round round-3">
            <li class="spacer">&nbsp;</li>
            
            <li class="game game-top winner">Sneaky <span>85</span></li>
            <li class="game game-spacer">&nbsp;</li>
            <li class="game game-bottom looser">Duke <span>63</span></li>
            
            <li class="spacer">&nbsp;</li>
          </ul>     
          </turnament>
        </div>
      </div>
    )
  }
}

export default Hearthstone;