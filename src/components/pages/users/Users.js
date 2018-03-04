import React from 'react';
import {Grid, Row} from 'react-bootstrap/lib';

//component
import WorkflowToDo from "../../organisms/WorkflowToDo/WorkflowToDo";
import WorkflowInProgress from "../../organisms/WorkflowInProgress/WorkflowInProgress";
import WorkflowCompleted from "../../organisms/WorkflowCompleted/WorkflowCompleted";



class Users extends React.Component {

  render() {

    return (
      <div className="Users">

        <Grid fluid>
          <Row>
            <WorkflowToDo/>
          </Row>
        </Grid>

      </div>
    )
  }
}

export default Users;