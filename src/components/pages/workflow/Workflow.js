import React from 'react';
import {Grid, Row} from 'react-bootstrap/lib';
import './Workflow.css'

//component

import WorkflowToDo from "../../organisms/WorkflowToDo/WorkflowToDo";
import WorkflowInProgress from "../../organisms/WorkflowInProgress/WorkflowInProgress";
import WorkflowCompleted from "../../organisms/WorkflowCompleted/WorkflowCompleted";


const dataWorkflowToDo = [
  {
    title: 'New website for JCD.pl',
    deadline: '5 days left'
  },
  {
    title: 'Free PSD Template vol. 3',
    deadline: '5 days left'
  },
  {
    title: 'New logo for Google',
    deadline: '5 days left'
  },
  {
    title: 'New website for Windu.org',
    deadline: '5 days left'
  },
  {
    title: 'Free PSD Template vol. 2',
    deadline: '5 days left'
  },
  {
    title: 'Iconset Vol. 3',
    deadline: '5 days left'
  },
];

const dataWorkflowProgress = [
  {
    title: 'New logo for Apple',
    deadline: '1 days left'
  },
  {
    title: 'Daily UI Kit',
    deadline: '5 days left'
  },
  {
    title: 'Business Cards',
    deadline: '2 days delays',
    deadlineCheck: true
  }
];

const dataWorkflowCompleted = [
  {
    title: 'Free PSD Template vol. 1',
    deadline: 'Completed!'
  },
  {
    title: 'Iconset vol. 1',
    deadline: 'Completed!'
  },
  {
    title: 'New website for Symu.co',
    deadline: 'Completed!'
  },
  {
    title: 'Iconset vol. 2',
    deadline: 'Completed!'
  }
];


class Workflow extends React.Component {

  render() {

    return (
      <div className="Workflow">

        <Grid fluid>
          <Row>
            <WorkflowToDo data={dataWorkflowToDo}/>
            <WorkflowInProgress data={dataWorkflowProgress}/>
            <WorkflowCompleted data={dataWorkflowCompleted}/>
          </Row>
        </Grid>

      </div>
    )
  }
}

export default Workflow;