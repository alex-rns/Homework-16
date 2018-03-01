import React from 'react';
import { Col } from 'react-bootstrap/lib';
import '../pages/home/Home.css'
//components
import Box from '../atoms/Box'

class HomeMessages extends React.Component {
  render(){
    return(
      <Col className='HomeMessages' md={4}>
        <Box>
          Messages
        </Box>
      </Col>
    )
  }
}

export default HomeMessages;