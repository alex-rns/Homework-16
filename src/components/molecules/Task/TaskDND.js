import uniqueId from 'lodash/uniqueId';
import React from 'react';
import Sortable from 'react-sortablejs';
import FontAwesome from 'react-fontawesome';
import './Task.css'

//components

import Block from '../../atoms/Block/Block'
import CircleLetter from "../../atoms/CircleLetter/CircleLetter";
import DropdownButton from "../../atoms/buttons/DropdownButton/DropdownButton";



const TaskDND = ({items}) => {
  items = items.map((val, key) => (

    <Block key={uniqueId()} data-id={val.title}>
      <div className='Task'>
        <div className="task-wrap">
          <CircleLetter dataLetter={val.title}/>
          <div className="task-tittle">
            <h4>{val.title}</h4>
            <span className={val.deadlineCheck ? 'delay' : null
            }>
                      <FontAwesome
                        className='task-time-icon'
                        name='clock'
                      />
              {val.deadline}
                    </span>
          </div>
        </div>
        <DropdownButton/>
      </div>
    </Block>
  ));

  return (
    <Sortable

      options={{
        group: 'shared'
      }}
    >
      {items}
    </Sortable>
  );
};

export default TaskDND;