import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap/lib';

//component
import Box from '../../atoms/Box'
import Select from '../../atoms/Select'

//config
import salesChart from '../../../config/pieChart.config'

class Home extends React.Component {
  render() {
    const yourSalesSelect = ["Last Year", "Last Month", "Last Week"];

    const userName = JSON.parse(localStorage.getItem("userName"));

    return (
      <div className="Home">
        <h2>Hello {userName}</h2>

        <Grid fluid>
          <Row>
            <Col lg={5} md={12}>
              <Box>
                <Row>
                <Col md={6}>
                  <h2>Your Sales</h2>
                </Col>
                <Col md={6}>
                  <Select data={yourSalesSelect}/>
                </Col>
                </Row>
                <ReactHighcharts config={salesChart}>
                </ReactHighcharts>
              </Box>
            </Col>




            <Col lg={7} md={12}>
              <Box>
                <h2>Your Sales2</h2>
              </Box>
            </Col>
          </Row>

        </Grid>

      </div>
    )
  }
}

export default Home;