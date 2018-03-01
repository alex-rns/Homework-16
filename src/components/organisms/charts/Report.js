import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {Row, Col} from 'react-bootstrap/lib';
import '../../pages/home/Home.css'
//component
import Box from '../../atoms/Box'
import Select from '../../atoms/Select'

//config
import reportChart from "../../../config/reportChart.config";

class Report extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      dataReport : []
    }
  }

  componentWillMount(){
    fetch('/api/user/report/year', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          dataReport: res
        });
        let chart = this.refs.reportChart.getChart();
        chart.series[0].setData(this.state.dataReport, true);
      })
  }

  onChange = (e) => {
    if (e.target.value === "Last Year") {
      fetch('/api/user/report/year', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            dataReport: res
          });
          let chart = this.refs.reportChart.getChart();
          chart.series[0].setData(this.state.dataReport, true);

        })
    } else if (e.target.value === "Last Month") {
      fetch('/api/user/report/month', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            dataReport: res
          });
          let chart = this.refs.reportChart.getChart();
          chart.series[0].setData(this.state.dataReport, true);
        })
    } else if (e.target.value === "Last Week") {
      fetch('/api/user/report/week', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            dataReport: res
          });
          let chart = this.refs.reportChart.getChart();
          chart.series[0].setData(this.state.dataReport, true);
        })
    }
  };

  render() {

    const yourSalesSelect = ["Last Year", "Last Month", "Last Week"];

    return (
      <Col className='Report' md={7}>
        <Box>
          <Row>
            <Col xs={6}>
              <h2>Report</h2>
            </Col>
            <Col className='text-right' xs={6}>
              <Select onChange={this.onChange} data={yourSalesSelect}/>
            </Col>
          </Row>
          <ReactHighcharts config={reportChart} ref='reportChart'>
          </ReactHighcharts>
        </Box>
      </Col>
    )
  }

}

export default Report;