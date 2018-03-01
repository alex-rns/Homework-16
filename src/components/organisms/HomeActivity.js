import React from 'react';
import { Col } from 'react-bootstrap/lib';

//components
import Box from '../atoms/Box'

class HomeActivity extends React.Component {
  render(){
    return(
      <Col md={4}>
        <Box>
          HomeActivity
        </Box>
      </Col>
    )
  }
}

export default HomeActivity;