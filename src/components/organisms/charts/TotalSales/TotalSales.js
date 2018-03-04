import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {Row, Col} from 'react-bootstrap/lib';

//component
import Box from '../../../atoms/Box/Box'

//config
import activeUsersChart from "../../../../config/activeUsersChart.config";
import ChangeChartButton from "../../../atoms/buttons/ChangeChartButton/ChangeChartButton";
import DelChartButton from "../../../atoms/buttons/DelChartButton/DelChartButton";

class TotalSales extends React.Component {

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     dataActiveUsers: []
  //   }
  // }
  //
  // componentWillMount() {
  //   fetch('/api/user/activeUsers/year', {
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     method: 'get'
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //       this.setState({
  //         dataActiveUsers: res
  //       });
  //       let chart = this.refs.activeUsersChart.getChart();
  //       chart.series[0].setData(this.state.dataActiveUsers, true);
  //     })
  // }
  //
  // onChange = (e) => {
  //   if (e.target.value === "Last Year") {
  //     fetch('/api/user/activeUsers/year', {
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //       method: 'get'
  //     })
  //       .then(res => res.json())
  //       .then(res => {
  //         console.log(res);
  //         this.setState({
  //           dataActiveUsers: res
  //         });
  //         let chart = this.refs.activeUsersChart.getChart();
  //         chart.series[0].setData(this.state.dataActiveUsers, true);
  //
  //       })
  //   } else if (e.target.value === "Last Month") {
  //     fetch('/api/user/activeUsers/month', {
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //       method: 'get'
  //     })
  //       .then(res => res.json())
  //       .then(res => {
  //         console.log(res);
  //         this.setState({
  //           dataActiveUsers: res
  //         });
  //         let chart = this.refs.activeUsersChart.getChart();
  //         chart.series[0].setData(this.state.dataActiveUsers, true);
  //       })
  //   } else if (e.target.value === "Last Week") {
  //     fetch('/api/user/activeUsers/week', {
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //       method: 'get'
  //     })
  //       .then(res => res.json())
  //       .then(res => {
  //         console.log(res);
  //         this.setState({
  //           dataActiveUsers: res
  //         });
  //         let chart = this.refs.activeUsersChart.getChart();
  //         chart.series[0].setData(this.state.dataActiveUsers, true);
  //       })
  //   }
  // };

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
          {/*<ReactHighcharts config={activeUsersChart} ref='activeUsersChart'>*/}
          {/*</ReactHighcharts>*/}
        </Box>
      </Col>
    )
  }

}

export default TotalSales;