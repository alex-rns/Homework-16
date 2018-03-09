import React from 'react';
import {Grid, Row} from 'react-bootstrap/lib';
import './Workflow.css'
import Sortable from 'react-sortablejs'
import uniqueId from 'lodash/uniqueId';

//component


class WorkflowTest extends React.Component {

  state = {
    groupLeft: [
      {
        title: '123',
        deadline: '10 days left'
      },
      {
        title: '1',
        deadline: '10 days left'
      },
      'Banana', 'Cherry', 'Grape'],
    groupCenter: ['Le', 'Or', 'Pe', 'Pea'],
    groupRight: ['Lemon', 'Orange', 'Pear', 'Peach']
  };


  render() {
    const groupLeft = this.state.groupLeft.map((val, key) => (
      <div>
        <div key={uniqueId()} data-id={val}>{val.title}</div>
        <div>{val.deadline}</div>
      </div>

    ));
    const groupCenter = this.state.groupCenter.map((val, key) => (
      <div key={uniqueId()} data-id={val}>{val}</div>
    ));
    const groupRight = this.state.groupRight.map((val, key) => (
      <div key={uniqueId()} data-id={val}>{val}</div>
    ));


    return (
      <div>
        <div>
          <div className="row">
            <div className="col-sm-4">
              <Sortable
                options={{
                  animation: 150,
                  group: {
                    name: 'shared',
                    pull: true,
                    put: true
                  }
                }}
                className="block-list"
                ref="group-left"
                onChange={(items) => {
                  this.setState({groupLeft: items});
                }}
              >
                {groupLeft}
              </Sortable>
            </div>
            <div className="col-sm-4">
              <Sortable
                options={{
                  animation: 150,
                  group: {
                    name: 'shared',
                    pull: true,
                    put: true
                  }
                }}
                className="block-list"
                onChange={(items) => {
                  this.setState({groupCenter: items});
                }}
                ref="group-center"
              >
                {groupCenter}
              </Sortable>
            </div>
            <div className="col-sm-4">
              <Sortable
                options={{
                  animation: 150,
                  group: {
                    name: 'shared',
                    pull: true,
                    put: true
                  }
                }}
                className="block-list"
                ref="group-right"
                onChange={(items) => {
                  this.setState({groupRight: items});
                }}
              >
                {groupRight}
              </Sortable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkflowTest;