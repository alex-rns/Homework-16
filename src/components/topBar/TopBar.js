import React from 'react';
import './TopBar.css'
import { Navbar, Header, Button, Glyphicon, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap/lib'
import userPhoto from '../../assets/img/user-photo.png'



class TopBar extends React.Component {
  render() {
    return(
      <Navbar>

        <Navbar.Header>
          <Button>
            <Glyphicon glyph="align-justify" />
          </Button>
          <Button>
            <Glyphicon glyph="search" />
          </Button>
        </Navbar.Header>

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
            <MenuItem eventKey={3.4}>Log out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}

export default TopBar;