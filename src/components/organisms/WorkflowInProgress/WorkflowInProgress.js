import React from 'react';
import {Col} from 'react-bootstrap/lib';
import FontAwesome from 'react-fontawesome';

//components
import TaskDND from "../../molecules/Task/TaskDND";


class WorkflowInProgress extends React.Component {
  render() {
    return (
      <Col className='WorkflowInProgress' md={4}>

          <div className="workflow-header">
            <h2>In Progress<span>({this.props.data.length})</span></h2>
            <FontAwesome
              className='workflow-header-icon'
              name='angle-right'
              size='3x'
            />
          </div>

        <TaskDND items={this.props.data}/>

      </Col>
    )
  }
}

export default WorkflowInProgress;