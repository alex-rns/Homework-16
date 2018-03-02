import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Message.css'

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
                  <AvatarImg dataImg={item.userAvatar}/>
                  <div className='task-body'>
                    <p className='userName'>{item.userName}
                      <span className='online-time'>{item.onlineTime}
                      </span>
                    </p>
                    <p className='messageText'>{item.text}</p>
                    <div className='message-buttons'>
                      <button>
                        <FontAwesome
                          className='icon-messages-box-button'
                          name='share'
                          rotate={180}
                          flip="horizontal"
                        />
                      </button>
                      <button>
                        <FontAwesome
                          className='icon-messages-box-button'
                          name='cog'
                        />
                      </button>
                    </div>
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