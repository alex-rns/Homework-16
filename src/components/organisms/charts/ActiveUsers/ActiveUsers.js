import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {Row, Col} from 'react-bootstrap/lib';
import './ActiveUsers.css'

//component
import Box from '../../../atoms/Box/Box'
import Select from '../../../atoms/Select/Select'

//config
import activeUsersChart from "../../../../config/activeUsersChart.config";
import ChangeChartButton from "../../../atoms/buttons/ChangeChartButton/ChangeChartButton";
import DelChartButton from "../../../atoms/buttons/DelChartButton/DelChartButton";

class ActiveUsers extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataActiveUsers: []
    }
  }

  componentWillMount() {
    fetch('/api/user/activeUsers/year', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          dataActiveUsers: res
        });
        let chart = this.refs.activeUsersChart.getChart();
        chart.series[0].setData(this.state.dataActiveUsers, true);
      })
  }

  onChange = (e) => {
    if (e.target.value === "Last Year") {
      fetch('/api/user/activeUsers/year', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            dataActiveUsers: res
          });
          let chart = this.refs.activeUsersChart.getChart();
          chart.series[0].setData(this.state.dataActiveUsers, true);

        })
    } else if (e.target.value === "Last Month") {
      fetch('/api/user/activeUsers/month', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            dataActiveUsers: res
          });
          let chart = this.refs.activeUsersChart.getChart();
          chart.series[0].setData(this.state.dataActiveUsers, true);
        })
    } else if (e.target.value === "Last Week") {
      fetch('/api/user/activeUsers/week', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            dataActiveUsers: res
          });
          let chart = this.refs.activeUsersChart.getChart();
          chart.series[0].setData(this.state.dataActiveUsers, true);
        })
    }
  };

  render() {

    const activeUserPeriodSelect = {
      list: ["Last Year", "Last Month", "Last Week"],
      label: 'Period'
    };
    const activeUserTypeSelect = {
      list: ["Notifications", "2", "3"],
      label: 'Type'
    };

    return (
      <Col className='ActiveUsers' md={7}>
        <div className="user-select-wrap">
          <Select onChange={this.onChange} data={activeUserPeriodSelect}/>
          <Select data={activeUserTypeSelect}/>
        </div>
        <Box>
          <Row>
            <Col xs={6}>
              <h2>Active Users</h2>
            </Col>
            <Col className='chart-button' xs={6}>
              <ChangeChartButton/>
              <DelChartButton/>

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