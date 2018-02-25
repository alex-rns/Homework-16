import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap/lib';

//component
import Box from '../../atoms/Box'
import Select from '../../atoms/Select'

//config
import SalesChart from '../../../config/pieChart.config'

class YourSales extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      dataSales : [],
      sumCountSales: null
    }
  }

  componentWillMount(){
    fetch('/api/user/sales/year', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        res && res.map((item)=>{
          let sum= 0;
          for( let i=0; i<res.length;i++){
            sum+=item[1]
          }

          console.log('second item -', item[1]);
          this.setState({
            sumCountSales: sum
          });


          // let arr = [];
          // arr.push(item[1]);
          // console.log(arr)
          // this.setState({
          //   sumCountSales: arr
          // })


          // let countSales = item[1];
          // let sumCountSales = 0;
          // for(let i=0;i<countSales.length;i++){
          //   sumCountSales += parseInt(countSales[i])
          // }
          // console.log(sumCountSales);
        });
        console.log('123123 -', res);
        console.log('a -', this.state.sumCountSales);


        this.setState({
          dataSales: res,
        });
        let chart = this.refs.salesChart.getChart();

        chart.series[0].setData(this.state.dataSales, true);
        chart.setTitle({
          text: this.state.sumCountSales
        });


      })
  }

  onChange = (e) => {
    if (e.target.value === "Last Year") {
      fetch('/api/user/sales/year', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          res && res.map((item)=>{


            let sum= 0;
            for( let i=0; i<res.length;i++){
              sum+=item[1]
            }

            console.log('second item -', item[1]);
            this.setState({
              sumCountSales: sum
            });
          });


          console.log(res);
          this.setState({
            dataSales: res
          });
          let chart = this.refs.salesChart.getChart();
          chart.series[0].setData(this.state.dataSales, true);
          chart.setTitle({
            text: this.state.sumCountSales
          });


        })
    } else if (e.target.value === "Last Month") {
      fetch('/api/user/sales/month', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {

          res && res.map((item)=>{
            let sum= 0;
            for( let i=0; i<res.length;i++){
              sum+=item[1]
            }

            console.log('second item -', item[1]);
            this.setState({
              sumCountSales: sum
            });
          });

          console.log(res);
          this.setState({
            dataSales: res
          });
          let chart = this.refs.salesChart.getChart();
          chart.series[0].setData(this.state.dataSales, true);
          chart.setTitle({
            text: this.state.sumCountSales
          });

        })
    } else if (e.target.value === "Last Week") {
      fetch('/api/user/sales/week', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {

          res && res.map((item)=>{
            let sum= 0;
            for( let i=0; i<res.length;i++){
              sum+=item[1]
            }

            console.log('second item -', item[1]);
            this.setState({
              sumCountSales: sum
            });
          });

          console.log(res);
          this.setState({
            dataSales: res
          });
          let chart = this.refs.salesChart.getChart();
          chart.series[0].setData(this.state.dataSales, true);
          chart.setTitle({
            text: this.state.sumCountSales
          });

        })
    }
  };


  render() {

    const yourSalesSelect = ["Last Year", "Last Month", "Last Week"];


    return (
      <Col md={5}>
        <Box>
          <Row>
            <Col xs={6}>
              <h2>Your Sales</h2>
            </Col>
            <Col className='text-right' xs={6}>
              <Select onChange={this.onChange} data={yourSalesSelect}/>
            </Col>
          </Row>
          <ReactHighcharts config={SalesChart} ref='salesChart'>
          </ReactHighcharts>
        </Box>
      </Col>
    )
  }


}

export default YourSales;