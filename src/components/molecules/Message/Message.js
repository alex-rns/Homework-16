import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Message.css'

//components
import Block from '../../atoms/Block/Block'
import AvatarImg from "../../atoms/AvatarImg/AvatarImg";
import MessagesShareButton from "../../atoms/buttons/MessagesShareButton/MessagesShareButton";
import MessagesSettingsButton from "../../atoms/buttons/MessagesSettingsButton/MessagesSettingsButton";

class Message extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.data.map((item, index) => {
            return (
              <Block bg={item.read} key={index}>
                <div className='Message'>
                  <AvatarImg dataImg={item.userAvatar}/>
                  <div className='task-body'>
                    <p className='userName'>{item.userName}
                      <span className='online-time'>{item.onlineTime}
                      </span>
                    </p>
                    <p className='messageText'>{item.text}</p>
                    <div className='message-buttons'>
                      <MessagesShareButton/>
                      <MessagesSettingsButton/>
                    </div>
                  </div>
                </div>
              </Block>
            )
          })
        }
      </div>
    )
  }
}

export default Message;