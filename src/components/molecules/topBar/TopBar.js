import React from 'react';
import {withRouter} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './TopBar.css';

//components
import AccountDropdown from '../../atoms/AccountDropdown'
import userPhoto from '../../../assets/img/user-photo.png'
import NotificationButton from "../../atoms/buttons/NotificationButton";
import MessageButton from "../../atoms/buttons/MessageButton";
import AddProjectButton from "../../atoms/buttons/AddProjectButton";

const userData = {
  name: 'qwe',
  userPhoto: userPhoto
};


class TopBar extends React.Component {

  handleLogOut = (e) => {

    const {history} = this.props;

    e.preventDefault();
    localStorage.removeItem('userCheck');
    history.push('/authentication')
  };

  render() {
    return (
      <div className='TopBar'>
        <div className="top-bar-left-side">

          <button onClick={this.props.handleMouseDown}>Open menu</button>
          <button>search</button>
        </div>


        <div className="user-panel">
          <AddProjectButton/>
          <MessageButton/>
          <NotificationButton/>

          <AccountDropdown data={userData} />

        </div>
      </div>
    )
  }
}

export default withRouter(TopBar);