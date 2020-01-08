import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class GameType extends React.Component {
  render() {
    const { game } = this.props.match.params;

    return (
      <Grid columns='3' padded='vertically'>
        <Grid.Row>
          <Grid.Column verticalAlign='middle'>
            <Link to={`/${game}/game1`}>
              <Button size='massive' primary>New</Button>
            </Link>
          </Grid.Column>  
          <Grid.Column verticalAlign='middle'>
            <Link to={`/${game}/game2`}>
              <Button size='massive' primary>In Progress</Button>
            </Link>
          </Grid.Column>  
          <Grid.Column verticalAlign='middle'>
            <Link to={`/${game}/game3`}>
              <Button size='massive' primary>Archive</Button>
            </Link>
          </Grid.Column>  
        </Grid.Row>
      </Grid>
    )
  }
}

export default GameType;
