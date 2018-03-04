import React from 'react';
import {Col} from 'react-bootstrap/lib';


//components

import Task from "../../molecules/Task/Task";

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



class WorkflowCompleted extends React.Component {
  render() {
    return (
      <Col className='WorkflowCompleted' md={4}>

          <div className="workflow-header">
            <h2>Completed<span>(4)</span></h2>
          </div>

        <Task data={dataWorkflow}/>

      </Col>
    )
  }
}

export default WorkflowCompleted;