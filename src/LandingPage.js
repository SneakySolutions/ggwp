import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class LandingPage extends React.Component {

  render() {
    return (
      <Grid columns='3' padded='vertically'>
        <Grid.Row>
          <Grid.Column verticalAlign='middle'>
            <Link to='/hearthstone'>
              <Image className='zoom' size='medium' src={require('./images/hearhstone_logo.png')}/>
            </Link>
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <Link to='/fornite'>
              <Image className='zoom' size='medium' src={require('./images/fornite_logo.jpg')}/>
            </Link>
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <Link to='/fifa'>
              <Image className='zoom' size='medium' src={require('./images/fifa_logo.png')}/>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column verticalAlign='middle'>
            <Link to='/lol'>
              <Image className='zoom' size='medium' src={require('./images/league_logo.png')}/>
            </Link>
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <Link to='/tft'>
              <Image className='zoom' size='medium' src={require('./images/teamfighttactics_logo.png')}/>
            </Link>
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <Link to='/ow'>
              <Image className='zoom' size='medium' src={require('./images/overwatch_logo.jpg')}/>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default LandingPage;