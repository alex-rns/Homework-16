import React from 'react';
import { Col } from 'react-bootstrap/lib';

//components
import Box from '../atoms/Box'

class Tasks extends React.Component {
  render(){
    return(
      <Col md={4}>
        <Box>
          Tasks
        </Box>
      </Col>
    )
  }
}

export default Tasks;