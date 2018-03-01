import React from 'react';
import { Col } from 'react-bootstrap/lib';
import '../pages/home/Home.css'

//components
import Box from '../atoms/Box'

class HomeActivity extends React.Component {
  render(){
    return(
      <Col className='HomeActiv' md={4}>
        <Box>
          Activity
        </Box>
      </Col>
    )
  }
}

export default HomeActivity;