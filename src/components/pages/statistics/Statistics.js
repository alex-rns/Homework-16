import React from 'react';
import {Grid, Row} from 'react-bootstrap/lib';

//component
import Stats from "../../organisms/Stats/Stats";
import ActiveUsers from "../../organisms/charts/ActiveUsers/ActiveUsers";
import TotalSales from "../../organisms/charts/TotalSales/TotalSales";

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
            <TotalSales/>
          </Row>

        </Grid>

      </div>
    )
  }
}

export default Statistics;