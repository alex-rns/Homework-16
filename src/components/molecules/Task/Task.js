import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Task.css'

//components
import Box from '../../atoms/Box'
import TaskLetter from "../../atoms/CircleLetter";
import TaskDropdownButton from "../../atoms/buttons/DropdownButton/DropdownButton";



class Task extends React.Component {
  render() {
    return (
      <Box>
        <div className='Task'>
          <TaskLetter/>
          <div className="task-tittle">
            <h4>New website for Symu.co</h4>
            <span className='deadline delay'>
              <FontAwesome
                className='task-time-icon'
                name='clock'
              />
              5 days delays
            </span>
          </div>
          <TaskDropdownButton/>
        </div>
      </Box>
    )
  }
}

export default Task;