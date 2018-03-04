import React from 'react';
import { Col } from 'react-bootstrap/lib';
import '../../pages/home/Home.css'

//components
import Box from '../../atoms/Box/Box'
import Activity from "../../molecules/Activity/Activity";
import InfoCircle from "../../atoms/buttons/InfoCircle/InfoCircle";


import user1 from '../../../assets/img/user-1.png'
import user2 from '../../../assets/img/user-2.png'
import user3 from '../../../assets/img/user-3.png'
import user4 from '../../../assets/img/user-4.png'


const dataActivity = [
  {
    userAvatar: user1,
    userName: 'Nina Jones',
    onlineTime: '5 minutes ago',
    text: 'Hey You! It’s me again :-) I attached new'
  },
  {
    userAvatar: user2,
    userName: 'Nina Jones',
    onlineTime: '5 minutes ago',
    text: 'Hey You! It’s me again :-) I attached new'
  },
  {
    userAvatar: user3,
    userName: 'James Smith ',
    onlineTime: '5 minutes ago',
    text: 'Hey You! It’s me again :-) I attached new'
  },
  {
    userAvatar: user4,
    userName: 'Nina Jones',
    onlineTime: '5 minutes ago',
    text: 'Hey You! It’s me again :-) I attached new'
  },
];

class HomeActivity extends React.Component {
  render(){
    return(
      <Col className='HomeActiv' md={4}>
        <Box>
          <div className="home-tasks-header">
            <h3>Activity</h3>
            <div className="deadline-button-wrap">
              <InfoCircle/>
            </div>
          </div>
        </Box>

        <Activity data={dataActivity}/>
      </Col>
    )
  }
}

export default HomeActivity;