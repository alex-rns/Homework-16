import React from 'react';
import {Col} from 'react-bootstrap/lib';


//components
import TaskDND from "../../molecules/Task/TaskDND";


class WorkflowCompleted extends React.Component {
  render() {
    return (
      <Col className='WorkflowCompleted' md={4}>

          <div className="workflow-header">
            <h2>Completed<span>({this.props.data.length})</span></h2>
          </div>

        <TaskDND items={this.props.data}/>

      </Col>
    )
  }
}

export default WorkflowCompleted;