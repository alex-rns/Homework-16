import React from 'react';
import { Col } from 'react-bootstrap/lib';
import '../../pages/home/Home.css'

//components
import Box from '../../atoms/Box/Box'
import InfoCircle from "../../atoms/buttons/InfoCircle/InfoCircle";
import Message from "../../molecules/Message/Message";

import user1 from '../../../assets/img/user-1.png'
import user2 from '../../../assets/img/user-2.png'

const dataMessage = [
  {
    userAvatar: user1,
    userName: 'Nina Jones',
    onlineTime: '5 minutes ago',
    text: 'Hey You! It’s me again :-) I attached new',
    read: 'noread'
  },
  {
    userAvatar: user1,
    userName: 'Nina Jones',
    onlineTime: '5 minutes ago',
    text: 'Hey You! It’s me again :-) I attached new',
    read: 'noread'
  },
  {
    userAvatar: user2,
    userName: 'James Smith ',
    onlineTime: '5 minutes ago',
    text: 'Hey You! It’s me again :-) I attached new',
    read: 'readed'
  },
  {
    userAvatar: user1,
    userName: 'Nina Jones',
    onlineTime: '5 minutes ago',
    text: 'Hey You! It’s me again :-) I attached new',
    read: 'readed'
  },
];

class HomeMessages extends React.Component {
  render(){
    return(
      <Col className='HomeMessages' md={4}>

        <Box>
          <div className="home-tasks-header">
            <h3>Messages</h3>
            <div className="deadline-button-wrap">
              <InfoCircle/>
            </div>
          </div>
        </Box>

        <Message data={dataMessage}/>

      </Col>
    )
  }
}

export default HomeMessages;