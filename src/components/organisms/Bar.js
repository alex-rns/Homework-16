import React from 'react';
import TopBar from '../molecules/topBar/TopBar';
import LeftBar from '../molecules/leftBar/LeftBar';
import onClickOutside from 'react-onclickoutside'


class Bar extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      visible: false
    };
  }

  handleClickOutside = () => {
    this.setState({
      visible: false
    })
  };


  handleMouseDown = (e) => {
    this.toggleMenu()
  };

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible
    })
  };


  render() {
    return (
      <div>
        <TopBar handleMouseDown={this.handleMouseDown}/>
        <LeftBar onMouseDown={this.handleClickOutside} menuVisibility={this.state.visible}/>
      </div>
    )
  }
}

export default onClickOutside(Bar);