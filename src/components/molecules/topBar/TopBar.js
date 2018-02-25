import React from 'react';
import { withRouter } from 'react-router-dom';
import './TopBar.css';

//components
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap/lib';
import userPhoto from '../../../assets/img/user-photo.png'

class TopBar extends React.Component {


  handleLogOut = (e) => {

    const { history } = this.props;

    e.preventDefault();
    localStorage.removeItem('userCheck');
    history.push('/authentication')
  };

  render() {
    return(
      <Navbar>

        <button onClick={this.props.handleMouseDown}>Open menu</button>

        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            <Image src={userPhoto} circle />
          </NavItem>
          <NavDropdown eventKey={3} id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem onClick={this.handleLogOut} eventKey={3.4}>Log out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}

export default withRouter(TopBar);