import React from 'react';
import {Grid, Row} from 'react-bootstrap/lib';
import './Statistics.css'

//component
import YourSales from "../../organisms/charts/YourSales";
import Report from "../../organisms/charts/Report";
import Stats from "../../organisms/Stats/Stats";

class Statistics extends React.Component {

  render() {

    return (
      <div className="Statistics">

        <Grid fluid>
          <Row>
            <Stats/>
            <Report/>
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