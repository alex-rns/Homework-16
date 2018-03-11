import React from 'react';
import {Col} from 'react-bootstrap/lib';
import '../../pages/home/Home.css'
import './HomeTasks.css'

//components
import Box from '../../atoms/Box/Box'
import Task from "../../molecules/Task/Task";
import InfoCircle from "../../atoms/buttons/InfoCircle/InfoCircle";



class HomeTasks extends React.Component {

  constructor(){
    super();
    this.state ={
      dataTask : [],
      delays: 2
    }
  }


  componentWillMount() {
    fetch('/api/user/home/task', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          dataTask: res
        });
        console.log(res);

      });
  }

  render() {
    return (
      <Col className='HomeTasks' md={4}>

        <Box>
          <div className="home-tasks-header">
            <h3>Tasks</h3>
            <div className="deadline-button-wrap">
              <InfoCircle data={this.state.dataTask.length}/>
              <InfoCircle data={this.state.delays}/>
            </div>
          </div>
        </Box>

        <Task data={this.state.dataTask}/>

      </Col>
    )
  }
}

export default HomeTasks;