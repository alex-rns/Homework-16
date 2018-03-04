import React from 'react';
import './Activity.css'

//components
import Block from '../../atoms/Block/Block'
import AvatarImg from "../../atoms/AvatarImg/AvatarImg";


class Activity extends React.Component {
  render() {

    return (
      <div>
        {
          this.props.data.map((item, index) => {
            return (
              <Block key={index}>
                <div className='Message'>
                  <AvatarImg dataImg={item.userAvatar}/>
                  <div className='task-body'>
                    <p className='userName'>{item.userName}
                      <span className='online-time'>{item.onlineTime}
                      </span>
                    </p>
                    <p className='messageText'>{item.text}</p>
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

export default Activity;