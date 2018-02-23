import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap/lib';
import './Home.css'

//component
import YourSales from "../../organisms/charts/YourSales";
import Report from "../../organisms/charts/Report";

class Home extends React.Component {


  render() {

    const userName = JSON.parse(localStorage.getItem("userName"));

    return (
      <div className="Home">
        <h2>Hello {userName}!</h2>

        <Grid fluid>
          <Row>
            <YourSales/>
            <Report/>
          </Row>

        </Grid>

      </div>
    )
  }
}

export default Home;