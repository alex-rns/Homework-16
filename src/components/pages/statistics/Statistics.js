import React from 'react';
import {Grid, Row} from 'react-bootstrap/lib';

//component
import Stats from "../../organisms/Stats/Stats";
import ActiveUsers from "../../organisms/charts/ActiveUsers/ActiveUsers";

class Statistics extends React.Component {

  render() {

    return (
      <div className="Statistics">

        <Grid fluid>
          <Row>
            <Stats/>
            <ActiveUsers/>
          </Row>

          <Row>
            123
          </Row>

        </Grid>

      </div>
    )
  }
}

export default Statistics;