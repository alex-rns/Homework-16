import React from 'react';
import {Col} from 'react-bootstrap/lib';
import '../../pages/home/Home.css'
import './WorkflowToDo.css'
//components
import Box from '../../atoms/Box/Box'
import Task from "../../molecules/Task/Task";
import InfoCircle from "../../atoms/buttons/InfoCircle/InfoCircle";

const dataWorkflow = [
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



class WorkflowToDo extends React.Component {
  render() {
    return (
      <Col className='WorkflowToDo' md={4}>

        <Box>
          <div className="workflow-header">
            <h3>To Do<span>(6)</span></h3>
          </div>
        </Box>

        <Task data={dataWorkflow}/>

      </Col>
    )
  }
}

export default WorkflowToDo;