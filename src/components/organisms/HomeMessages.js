import React from 'react';
import { Col } from 'react-bootstrap/lib';

//components
import Box from '../atoms/Box'

class HomeMessages extends React.Component {
  render(){
    return(
      <Col md={4}>
        <Box>
          HomeMessages
        </Box>
      </Col>
    )
  }
}

export default HomeMessages;