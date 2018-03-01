import React from 'react';
import { Col } from 'react-bootstrap/lib';
import '../pages/home/Home.css'
import './HomeTasks.css'
//components
import Box from '../atoms/Box'
import Task from "../molecules/Task/Task";

class HomeTasks extends React.Component {
  render(){
    return(
      <Col className='HomeTasks' md={4}>

        <Box>
          <div className="home-tasks-header">
            <h3>Tasks</h3>
            <div className="button-wrap">
              <button>5</button>
              <button>2</button>
            </div>
          </div>
        </Box>

        <Task/>
        <Task/>

      </Col>
    )
  }
}

export default HomeTasks;