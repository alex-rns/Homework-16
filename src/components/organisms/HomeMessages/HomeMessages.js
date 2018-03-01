import React from 'react';
import { Col } from 'react-bootstrap/lib';
import '../../pages/home/Home.css'

//components
import Box from '../../atoms/Box/Box'
import InfoCircle from "../../atoms/buttons/InfoCircle/InfoCircle";
import Message from "../../molecules/Message/Message";

const dataMessage = [
  {
    user: 'Nina Jones',
    time: '5 minutes ago',
    text: 'Hey You! It’s me again :-) I attached new',
    readed: false
  },
  {
    user: 'Nina Jones',
    time: '5 minutes ago',
    text: 'Hey You! It’s me again :-) I attached new',
    readed: false
  },
  {
    user: 'Nina Jones',
    time: '5 minutes ago',
    text: 'Hey You! It’s me again :-) I attached new'
  },
  {
    user: 'Nina Jones',
    time: '5 minutes ago',
    text: 'Hey You! It’s me again :-) I attached new'
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