import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Login from './Login'
import './Authentication.css'

import logo from '../../assets/img/logo.png'
import Registration from "./Registration";


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

  render() {
    return (
      <div className='Authentication'>
        <div className="auth-wrapp">

          <div className='auth-box'>

              <img src={logo} alt="Logo"/>

              <Tabs
                className='auth'
                onChange={this.handleChange}
                value={this.state.slideIndex}
              >
                <Tab className='register' label="Register" value={0}/>
                <Tab className='login' label="Login" value={1}/>
              </Tabs>

          </div>
          <SwipeableViews
            className={'views-wrap'}
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <Registration/>
            <Login/>



          </SwipeableViews>
        </div>
      </div>
    )
  }
}

export default Authentication;