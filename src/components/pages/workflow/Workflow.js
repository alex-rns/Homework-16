import React from 'react';
import {Grid, Row} from 'react-bootstrap/lib';
import './Workflow.css'

//component
import WorkflowToDo from "../../organisms/WorkflowToDo/WorkflowToDo";
import WorkflowInProgress from "../../organisms/WorkflowInProgress/WorkflowInProgress";
import WorkflowCompleted from "../../organisms/WorkflowCompleted/WorkflowCompleted";



class Workflow extends React.Component {

  render() {

    return (
      <div className="Workflow">

        <Grid fluid>
          <Row>
            <WorkflowToDo/>
            <WorkflowInProgress/>
            <WorkflowCompleted/>
          </Row>
        </Grid>

      </div>
    )
  }
}

export default Workflow;