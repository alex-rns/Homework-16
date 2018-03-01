import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Task.css'

//components
import Box from '../../atoms/Box'
import CircleLetter from "../../atoms/CircleLetter";
import TaskDropdownButton from "../../atoms/buttons/DropdownButton/DropdownButton";


class Task extends React.Component {
  render() {

    return (
      <div>
        {
          this.props.data.map((item, index) => {
            return (
              <Box key={index}>
                <div className='Task'>
                  <CircleLetter dataLetter={item.title}/>
                  <div className="task-tittle">
                    <h4>{item.title}</h4>
                    <span className={item.deadlineCheck? 'delay': null
                    }>
                      <FontAwesome
                        className='task-time-icon'
                        name='clock'
                      />
                      {item.deadline}
                    </span>
                  </div>
                  <TaskDropdownButton/>
                </div>
              </Box>
            )
          })
        }
      </div>


    )
  }
}

export default Task;