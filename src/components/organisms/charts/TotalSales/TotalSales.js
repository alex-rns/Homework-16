import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {Row, Col} from 'react-bootstrap/lib';
import './TotalSales.css'

//component
import Box from '../../../atoms/Box/Box'

//config
import totalSalesChart from "../../../../config/totalSalesChart.config";
import ChangeChartButton from "../../../atoms/buttons/ChangeChartButton/ChangeChartButton";
import DelChartButton from "../../../atoms/buttons/DelChartButton/DelChartButton";

class TotalSales extends React.Component {


  componentWillMount() {
    fetch('/api/user/totalSales/direct', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        let chart = this.refs.directSalesChart.getChart();
        chart.series[0].setData(res.data);
        chart.setTitle({
          text: res.percent + '%'
        });
        console.log(res.chartColor);
      });

    fetch('/api/user/totalSales/chanel', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        let chart = this.refs.chanelSales.getChart();
        chart.series[0].setData(res.data);
        chart.setTitle({
          text: res.percent + '%'
        });
        console.log(res.chartColor);
      });

    fetch('/api/user/totalSales/chanelTwo', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        let chart = this.refs.chanelTwoSales.getChart();
        chart.series[0].setData(res.data);
        chart.setTitle({
          text: res.percent + '%'
        });
        console.log(res.chartColor);

      })
  }


  render() {

    return (
      <Col className='TotalSales' md={12}>
        <Box>
          <Row>
            <Col xs={6}>
              <h2>TotalSales</h2>
            </Col>
            <Col className='chart-button' xs={6}>
              <ChangeChartButton/>
              <DelChartButton/>

            </Col>
          </Row>

          <Row className='total-sales-charts'>
            <Col md={4}>
              <ReactHighcharts config={totalSalesChart} ref='directSalesChart'>
              </ReactHighcharts>
              <div className='total-sum'>
                <p>2,300$</p>
                <span>Direct Sales</span>
              </div>
            </Col>
            <Col md={4}>
              <ReactHighcharts config={totalSalesChart} ref='chanelSales'>
              </ReactHighcharts>
              <div className='total-sum'>
                <p>980$</p>
                <span>Channel Sales</span>
              </div>
            </Col>
            <Col md={4}>
              <ReactHighcharts config={totalSalesChart} ref='chanelTwoSales'>
              </ReactHighcharts>
              <div className='total-sum'>
                <p>1,250$</p>
                <span>Channel Sales</span>
              </div>
            </Col>

          </Row>

        </Box>
      </Col>
    )
  }

}

export default TotalSales;