import React from 'react';
import {withRouter} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './TopBar.css';

//components
import AccountDropdown from '../../atoms/AccountDropdown'
import userPhoto from '../../../assets/img/user-photo.png'
import NotificationButton from "../../atoms/buttons/NotificationButton";
import MessageButton from "../../atoms/buttons/MessageButton";
import AddProjectButton from "../../atoms/buttons/AddProjectButton/AddProjectButton";
import SearchButton from "../../atoms/buttons/SearchButton";

const userData = {
  name: JSON.parse(localStorage.getItem("userName")),
  userPhoto: userPhoto
};


class TopBar extends React.Component {

  render() {
    return (
      <div className='TopBar'>
        <div className="top-bar-left-side">

          <FontAwesome
            className='bars-caret-icon'
            name='caret-left'
          />
          <button className='bars-button' onClick={this.props.handleMouseDown}>
            <FontAwesome
            className='bars-button-icon'
            name='bars'
            size='2x'
          /></button>
          <SearchButton/>
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