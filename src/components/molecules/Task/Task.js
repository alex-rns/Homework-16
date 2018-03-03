import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Task.css'

//components
import Block from '../../atoms/Block/Block'
import CircleLetter from "../../atoms/CircleLetter/CircleLetter";
import DropdownButton from "../../atoms/buttons/DropdownButton/DropdownButton";


class Task extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.data.map((item, index) => {
            return (
              <Block key={index}>
                <div className='Task'>
                  <div className="task-wrap">
                    <CircleLetter dataLetter={item.title}/>
                    <div className="task-tittle">
                      <h4>{item.title}</h4>
                      <span className={item.deadlineCheck ? 'delay' : null
                      }>
                      <FontAwesome
                        className='task-time-icon'
                        name='clock'
                      />
                        {item.deadline}
                    </span>
                    </div>
                  </div>
                  <DropdownButton/>
                </div>
              </Block>
            )
          })
        }
      </div>


    )
  }
}

export default Task;