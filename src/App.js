import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>GG WP</h1>
      <Grid columns='3' padded='vertically'>
        <Grid.Row>
          <Grid.Column>
            <Image className='zoom' centered size='medium' src={require('./images/hearhstone_logo.png')}/>
          </Grid.Column>
          <Grid.Column>
            <Image className='zoom' centered size='medium' src={require('./images/fornite_logo.jpg')}/>
          </Grid.Column>
          <Grid.Column>
            <Image className='zoom' centered size='medium' src={require('./images/fifa_logo.png')}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Image className='zoom' centered size='medium' src={require('./images/league_logo.png')}/>
          </Grid.Column>
          <Grid.Column>
            <Image className='zoom' centered size='medium' src={require('./images/teamfighttactics_logo.png')}/>
          </Grid.Column>
          <Grid.Column>
            <Image className='zoom' centered size='medium' src={require('./images/overwatch_logo.jpg')}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
