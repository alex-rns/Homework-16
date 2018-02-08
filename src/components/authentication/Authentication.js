import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Login from './Login'
import './Authentication.css'

import logo from '../../assets/img/logo.png'


class Authentication extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value
    });
  };

  render(){
    return(
      <div className='Authentication'>
        <div className='auth-box'>
          <div className='auth-box-header'>
            <img src={logo} alt="Logo"/>

            <Tabs
              className='reg'
              onChange={this.handleChange}
              value={this.state.slideIndex}
            >
              <Tab className='register' label="Tab One" value={0} />
              <Tab className='login' label="Tab Two" value={1} />
            </Tabs>

            <SwipeableViews
              index={this.state.slideIndex}
              onChangeIndex={this.handleChange}
            >
              {Login}
              <div>
                slide n°22
              </div>
            </SwipeableViews>
          </div>
          </div>
        </div>
    )
  }
}

export default Authentication;