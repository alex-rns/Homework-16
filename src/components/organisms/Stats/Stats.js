import React from 'react';
import {Row, Col} from 'react-bootstrap/lib';
import './Stats.css'

//component
import Box from '../../atoms/Box/Box'
import StatSalesImg from '../../../assets/img/stats-sales.png'
import StatViewsImg from '../../../assets/img/stats-views.png'


class Stats extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      dataStatsSales : 1560,
      dataStatsView : 3230
    }
  }
  

  render() {

    return (
      <Col className='Stats' md={5}>
        <h2 className='stats-title'>Lorem Ipsum Stats</h2>
        <Box>
          <Row>
            <Col className='stat-num' xs={6}>
              <h2>{this.state.dataStatsSales}</h2>
              <p>Sales</p>
            </Col>
            <Col className='stat-img' xs={6}>
              <img src={StatSalesImg} alt="stat-sales"/>
            </Col>
          </Row>
        </Box>
        <Box>
          <Row>
            <Col className='stat-num' xs={6}>
              <h2>{this.state.dataStatsView}</h2>
              <p>Views</p>
            </Col>
            <Col className='stat-img' xs={6}>
              <img src={StatViewsImg} alt="stat-view"/>
            </Col>
          </Row>
        </Box>

      </Col>
    )
  }

}

export default Stats;