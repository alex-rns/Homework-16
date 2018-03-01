import React from 'react';
import FontAwesome from 'react-fontawesome';

//components
import Box from '../../atoms/Box/Box'
import AvatarImg from "../../atoms/AvatarImg/AvatarImg";


class Message extends React.Component {
  render() {

    return (
      <div>
        {
          this.props.data.map((item, index) => {
            return (
              <Box key={index}>
                <div className='Message'>
                  <AvatarImg/>

                  <div className="task-tittle">
                    <h4>{item.title}</h4>

                  </div>
                </div>
              </Box>
            )
          })
        }
      </div>
    )
  }
}

export default Message;