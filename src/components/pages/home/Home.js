import React from 'react';
import {Grid, Row} from 'react-bootstrap/lib';
import './Home.css'

//component
import YourSales from "../../organisms/charts/YourSales";
import Report from "../../organisms/charts/Report";
import Tasks from "../../organisms/HomeTasks";
import HomeMessages from "../../organisms/HomeMessages";
import HomeActivity from "../../organisms/HomeActivity";

class Home extends React.Component {

  render() {

    const userName = JSON.parse(localStorage.getItem("userName"));

    return (
      <div className="Home">
        <h2 className='hello-user' >Hello {userName}!</h2>

        <Grid fluid>
          <Row>
            <YourSales/>
            <Report/>
          </Row>

          <Row>
            <Tasks/>
            <HomeMessages/>
            <HomeActivity/>
          </Row>

        </Grid>

      </div>
    )
  }
}

export default Home;