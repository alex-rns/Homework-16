import React from 'react';
import {NavLink } from 'react-router-dom'
import './LeftBar.css'

//components
import logo from '../../../assets/img/logo.png'

class LeftBar extends React.Component {
  render() {

  let visibility = 'hide';

  if(this.props.menuVisibility) {
    visibility = 'show'
  }

    return(
      <div
        className={ 'LeftBar ' + visibility}
      >
        <div className="logo">
          <img src={logo} alt="Logo"/>
          <h1>Merkury</h1>
        </div>

        <nav className="nav-bar">
          <ul>
            <li className="nav-item">
              <NavLink exact to="/"> Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/workflow"> Workflow </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/statistics"> Statistics </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/calendar"> Calendar </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/users"> Users </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/settings"> Settings </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/authentication"> Authentication </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default LeftBar;