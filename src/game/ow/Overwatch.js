import React from 'react';
import '../common/competition.css';

class Overwatch extends React.Component {
  render() {
    return (
      <div>
        <div class="bg-image"></div>
        <div class="brackets">
          <h2>Gaming tournament test 2019</h2>
          <main id="tournament">
          <ul class="round round-1">
            <li class="spacer">&nbsp;</li>
            
            <li class="game game-top winner">Lousville <span>82</span></li>
            <li class="game game-spacer">&nbsp;</li>
            <li class="game game-bottom ">Colo St <span>56</span></li>

            <li class="spacer">&nbsp;</li>
            
            <li class="game game-top winner">Oregon <span>74</span></li>
            <li class="game game-spacer">&nbsp;</li>
            <li class="game game-bottom ">Saint Louis <span>57</span></li>

            <li class="spacer">&nbsp;</li>
            
            <li class="game game-top ">Memphis <span>48</span></li>
            <li class="game game-spacer">&nbsp;</li>
            <li class="game game-bottom winner">Mich St <span>70</span></li>

            <li class="spacer">&nbsp;</li>
            
            <li class="game game-top ">Creighton <span>50</span></li>
            <li class="game game-spacer">&nbsp;</li>
            <li class="game game-bottom winner">Duke <span>66</span></li>

            <li class="spacer">&nbsp;</li>
          </ul>
          <ul class="round round-2">
            <li class="spacer">&nbsp;</li>
            
            <li class="game game-top winner">Lousville <span>77</span></li>
            <li class="game game-spacer">&nbsp;</li>
            <li class="game game-bottom ">Oregon <span>69</span></li>

            <li class="spacer">&nbsp;</li>
            
            <li class="game game-top ">Mich St <span>61</span></li>
            <li class="game game-spacer">&nbsp;</li>
            <li class="game game-bottom winner">Duke <span>71</span></li>

            <li class="spacer">&nbsp;</li>
          </ul>
          <ul class="round round-3">
            <li class="spacer">&nbsp;</li>
            
            <li class="game game-top winner">Lousville <span>85</span></li>
            <li class="game game-spacer">&nbsp;</li>
            <li class="game game-bottom ">Duke <span>63</span></li>
            
            <li class="spacer">&nbsp;</li>
          </ul>     
          </main>
        </div>
      </div>
    )
  }
}

export default Overwatch;