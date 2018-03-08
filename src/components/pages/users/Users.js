import React from 'react';
import {Grid, Row} from 'react-bootstrap/lib';
import './Users.css'

//component

import UserTable from "../../organisms/UserTable/UserTable";

import JohnDoe from '../../../assets/img/John Doe.png'
import AlexSmith from '../../../assets/img/Alex Smith.png'
import AnnClooney from '../../../assets/img/Ann Clooney.png'
import JaneDoe from '../../../assets/img/Jane Doe.png'
import NickyHunt from '../../../assets/img/Nicky Hunt.png'
import PatricSmith from '../../../assets/img/Patric Smith.png'
import NinaJones from '../../../assets/img/Nina Jones.png'






const users = [
  {
    userPhoto: JohnDoe,
    userName: 'John Doe',
    position: 'CEO',
    lastActivity: 'Online now!',
    email: 'johndoe@design.com',
    phone: '(000) 111 222 333',
    active: true
  },
  {
    userPhoto: NinaJones,
    userName: 'Nina Jones',
    position: 'UX Designer',
    lastActivity: 'Online now!',
    email: 'ninajones@design.com',
    phone: '(000) 111 222 333',
    active: true
  },
  {
    userPhoto: AlexSmith,
    userName: 'Alex Smith',
    position: 'Web Designer',
    lastActivity: 'Online now!',
    email: 'alexsmith@design.com',
    phone: '(000) 111 222 333',
    active: true
  },
  {
    userPhoto: AnnClooney,
    userName: 'Ann Clooney',
    position: 'Account Manager',
    lastActivity: '20 minutes ago',
    email: 'annclooney@design.com',
    phone: '(000) 111 222 333',
    active: false
  },
  {
    userPhoto: PatricSmith,
    userName: 'Patric Smith',
    position: 'Project Manager',
    lastActivity: '40 minutes ago',
    email: 'patricksmith@design.com',
    phone: '(000) 111 222 333',
    active: false
  }
];



class Users extends React.Component {

  render() {

    return (
      <div className="Users">
        <h2>Users <span>({users.length})</span></h2>

        <Grid fluid>
          <Row>
            <UserTable data={users}/>
          </Row>
        </Grid>

      </div>
    )
  }
}

export default Users;