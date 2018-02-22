import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap/lib';
import './Home.css'

//component
import Box from '../../atoms/Box'
import Select from '../../atoms/Select'

//config
import salesChart from '../../../config/pieChart.config'
import reportChart from '../../../config/reportChart.config'

class Home extends React.Component {
  render() {
    const yourSalesSelect = ["Last Year", "Last Month", "Last Week"];

    const userName = JSON.parse(localStorage.getItem("userName"));



    return (
      <div className="Home">
        <h2>Hello {userName}!</h2>

        <Grid fluid>
          <Row>
            <Col md={5}>
              <Box>
                <Row>
                <Col xs={6}>
                  <h2>Your Sales</h2>
                </Col>
                <Col className='text-right' xs={6}>
                  <Select data={yourSalesSelect}/>
                </Col>
                </Row>
                <ReactHighcharts config={salesChart} ref="chart">
                </ReactHighcharts>
              </Box>
            </Col>




            <Col md={7}>
              <Box>
                <Row>
                  <Col xs={6}>
                    <h2>Report</h2>
                  </Col>
                  <Col className='text-right' xs={6}>
                    <Select data={yourSalesSelect}/>
                  </Col>
                </Row>
                <ReactHighcharts config={reportChart}>
                </ReactHighcharts>
              </Box>
            </Col>
          </Row>

        </Grid>

      </div>
    )
  }
}

export default Home;