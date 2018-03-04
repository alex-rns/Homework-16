import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {Row, Col} from 'react-bootstrap/lib';
import '../../pages/home/Home.css'
//component
import Box from '../../atoms/Box/Box'
import Select from '../../atoms/Select/Select'

//config
import activeUsersChart from "../../../config/activeUsersChart.config";

class ActiveUsers extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataReport: []
    }
  }

  componentWillMount() {
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
        let chart = this.refs.activeUsersChart.getChart();
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
          let chart = this.refs.activeUsersChart.getChart();
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
          let chart = this.refs.activeUsersChart.getChart();
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
          let chart = this.refs.activeUsersChart.getChart();
          chart.series[0].setData(this.state.dataReport, true);
        })
    }
  };

  render() {

    const activeUserPeriodSelect = {
      list: ["Last Year", "Last Month", "Last Week"],
      label: 'Period'
    };
    const activeUserTypeSelect = {
      list: ["Last Year", "Last Month", "Last Week"],
      label: 'Type'
    };

    return (
      <Col className='ActiveUsers' md={7}>
        <div className="select-wrap">
          <Select onChange={this.onChange} data={activeUserPeriodSelect}/>
          <Select onChange={this.onChange} data={activeUserTypeSelect}/>
        </div>
        <Box>
          <Row>
            <Col xs={6}>
              <h2>Report</h2>
            </Col>
            <Col className='text-right' xs={6}>

            </Col>
          </Row>
          <ReactHighcharts config={activeUsersChart} ref='activeUsersChart'>
          </ReactHighcharts>
        </Box>
      </Col>
    )
  }

}

export default ActiveUsers;