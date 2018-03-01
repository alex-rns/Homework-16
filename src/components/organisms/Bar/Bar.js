import React from 'react';
import TopBar from '../../molecules/topBar/TopBar';
import LeftBar from '../../molecules/leftBar/LeftBar';
import onClickOutside from 'react-onclickoutside'

class Bar extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      visible: false
    };
  }


  //hide leftBar on click to content
  handleClickOutside = () => {
    this.setState({
      visible: false
    })
  };

  handleMouseDown = () => {
    this.toggleMenu()
  };

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible
    })
  };


  //hide leftBar on click link
  handleLinkClick = () => {
    this.setState({
      visible: false
    })
  };

  render() {
    return (
      <div>
        <TopBar handleMouseDown={this.handleMouseDown}/>
        <LeftBar handleLinkClick={this.handleLinkClick} onMouseDown={this.handleClickOutside} menuVisibility={this.state.visible}/>
      </div>
    )
  }
}

export default onClickOutside(Bar);