import React from 'react';
import {Grid, Row} from 'react-bootstrap/lib';
import './Workflow.css'

//component

import WorkflowToDo from "../../organisms/WorkflowToDo/WorkflowToDo";
import WorkflowInProgress from "../../organisms/WorkflowInProgress/WorkflowInProgress";
import WorkflowCompleted from "../../organisms/WorkflowCompleted/WorkflowCompleted";


const dataWorkflowToDo = [
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

const dataWorkflowProgress = [
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

const dataWorkflowCompleted = [
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