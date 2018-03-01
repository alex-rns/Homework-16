import React from 'react';
import {Col} from 'react-bootstrap/lib';
import '../pages/home/Home.css'
import './HomeTasks.css'
//components
import Box from '../atoms/Box'
import Task from "../molecules/Task/Task";


const dataTask = [
  {
    title: 'New website for Symu.co',
    deadline: '5 days delays',
    deadlineCheck: true
  },
  {
    title: 'Free business PSD Template',
    deadline: '2 days delays',
    deadlineCheck: true
  },
  {
    title: 'New logo for JCD.pl',
    deadline: '5 days left'
  },
  {
    title: 'Free Icons Set vol. 3',
    deadline: '10 days left'
  },
];


class HomeTasks extends React.Component {
  render() {
    return (
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

        <Task data={dataTask}/>

      </Col>
    )
  }
}

export default HomeTasks;