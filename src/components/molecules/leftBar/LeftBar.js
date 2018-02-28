import React from 'react';
import {NavLink} from 'react-router-dom'
import FontAwesome from 'react-fontawesome';
import './LeftBar.css'

//components
import logo from '../../../assets/img/logo.png'

class LeftBar extends React.Component {

  render() {

    let visibility = 'hide';

    if (this.props.menuVisibility) {
      visibility = 'show'
    }

    return (
      <div
        className={'LeftBar ' + visibility}
      >
        <div className="logo">
          <img src={logo} alt="Logo"/>
          <h1>Merkury</h1>
        </div>

        <nav className="nav-bar">
          <ul>
            <li className="nav-item">
              <NavLink onClick={this.props.handleLinkClick} exact to="/">
                <FontAwesome
                  className='nav-icon nav-icon-home'
                  name='home'
                />
                Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={this.props.handleLinkClick} exact to="/workflow">
                <FontAwesome
                  className='nav-icon nav-icon-home'
                  name='pause'
                  rotate='90'
                />
                Workflow </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={this.props.handleLinkClick} exact to="/statistics">
                <FontAwesome
                  className='nav-icon nav-icon-home'
                  name='check'
                />
                Statistics </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={this.props.handleLinkClick} exact to="/calendar">
                <FontAwesome
                  className='nav-icon nav-icon-home'
                  name='calendar'
                />
                Calendar </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={this.props.handleLinkClick} exact to="/users">
                <FontAwesome
                  className='nav-icon nav-icon-home'
                  name='user'
                />
                Users </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={this.props.handleLinkClick} exact to="/settings">
                <FontAwesome
                  className='nav-icon nav-icon-home'
                  name='cog'
                /> Settings </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={this.props.handleLinkClick} exact to="/authentication"> Authentication </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default LeftBar;