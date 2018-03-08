import React from 'react';
import {Grid, Row} from 'react-bootstrap/lib';
import './Users.css'

//component
import Select from "../../atoms/Select/Select";
import UserTable from "../../organisms/UserTable/UserTable";

import JohnDoe from '../../../assets/img/John Doe.png'
import AlexSmith from '../../../assets/img/Alex Smith.png'
import AnnClooney from '../../../assets/img/Ann Clooney.png'
import JaneDoe from '../../../assets/img/Jane Doe.png'
import NickyHunt from '../../../assets/img/Nicky Hunt.png'
import PatricSmith from '../../../assets/img/Patric Smith.png'
import NinaJones from '../../../assets/img/Nina Jones.png'


const usersSelect = {
  list: ["Active First", "No Active", "All Users"],
  label: 'Sort'
};


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
  },
  {
    userPhoto: NickyHunt,
    userName: 'Nicky Hunt',
    position: 'Product Designer',
    lastActivity: '1 hour ago',
    email: 'nickyhunt@design.com',
    phone: '(000) 111 222 333',
    active: false
  },
  {
    userPhoto: JaneDoe,
    userName: 'Jane Doe',
    position: 'Graphic Designer',
    lastActivity: '2 days ago',
    email: 'janedoe@design.com',
    phone: '(000) 111 222 333',
    active: false
  },

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
  },
  {
    userPhoto: NickyHunt,
    userName: 'Nicky Hunt',
    position: 'Product Designer',
    lastActivity: '1 hour ago',
    email: 'nickyhunt@design.com',
    phone: '(000) 111 222 333',
    active: false
  },
  {
    userPhoto: JaneDoe,
    userName: 'Jane Doe',
    position: 'Graphic Designer',
    lastActivity: '2 days ago',
    email: 'janedoe@design.com',
    phone: '(000) 111 222 333',
    active: false
  },
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
  },
  {
    userPhoto: NickyHunt,
    userName: 'Nicky Hunt',
    position: 'Product Designer',
    lastActivity: '1 hour ago',
    email: 'nickyhunt@design.com',
    phone: '(000) 111 222 333',
    active: false
  },
  {
    userPhoto: JaneDoe,
    userName: 'Jane Doe',
    position: 'Graphic Designer',
    lastActivity: '2 days ago',
    email: 'janedoe@design.com',
    phone: '(000) 111 222 333',
    active: false
  },
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
  },
  {
    userPhoto: NickyHunt,
    userName: 'Nicky Hunt',
    position: 'Product Designer',
    lastActivity: '1 hour ago',
    email: 'nickyhunt@design.com',
    phone: '(000) 111 222 333',
    active: false
  },
  {
    userPhoto: JaneDoe,
    userName: 'Jane Doe',
    position: 'Graphic Designer',
    lastActivity: '2 days ago',
    email: 'janedoe@design.com',
    phone: '(000) 111 222 333',
    active: false
  },

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
  },
  {
    userPhoto: NickyHunt,
    userName: 'Nicky Hunt',
    position: 'Product Designer',
    lastActivity: '1 hour ago',
    email: 'nickyhunt@design.com',
    phone: '(000) 111 222 333',
    active: false
  },
  {
    userPhoto: JaneDoe,
    userName: 'Jane Doe',
    position: 'Graphic Designer',
    lastActivity: '2 days ago',
    email: 'janedoe@design.com',
    phone: '(000) 111 222 333',
    active: false
  },
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
  },
  {
    userPhoto: NickyHunt,
    userName: 'Nicky Hunt',
    position: 'Product Designer',
    lastActivity: '1 hour ago',
    email: 'nickyhunt@design.com',
    phone: '(000) 111 222 333',
    active: false
  },
  {
    userPhoto: JaneDoe,
    userName: 'Jane Doe',
    position: 'Graphic Designer',
    lastActivity: '2 days ago',
    email: 'janedoe@design.com',
    phone: '(000) 111 222 333',
    active: false
  }

];





class Users extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeUsers: []
    }
  }

  componentWillMount() {
    let active = users.filter((user) => {
        return user.active
      }
    );
    this.setState({
      activeUsers: active
    })
  }


  onChange = (e) => {
    if (e.target.value === "Active First") {
      let active = users.filter((user) => {
          return user.active
        }
      );
      this.setState({
        activeUsers: active
      })

    }
    else if (e.target.value === "No Active") {
      let active = users.filter((user) => {
          return !user.active
        }
      );
      this.setState({
        activeUsers: active
      });

    }
    else {
      this.setState({
        activeUsers: users
      });
    }
  };

  render() {

    return (
      <div className="Users">
        <div className="users-header">
          <h2>Users <span>({this.state.activeUsers.length})</span></h2>
          <Select onChange={this.onChange} data={usersSelect}/>
        </div>

        <Grid fluid>
          <Row>
            <UserTable data={this.state.activeUsers}/>
          </Row>
        </Grid>

      </div>
    )
  }
}

export default Users;