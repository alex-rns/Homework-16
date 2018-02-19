import React from 'react';
import './Authentication.css';
import { Link } from 'react-router-dom'

//components
import Registration from "./Registration";
import Login from './Login';
import logo from '../../assets/img/logo.png';


class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      tab: 'logTab'
    }
  }

  tabChange = (value) => {
    this.setState({
      tab: value
    })
  };

  render() {

    return (

      <div className="Authentication">
        <div className="auth-wrapp">
          <div className='auth-box'>
            <img src={logo} alt="Logo"/>
            <div>
                <a
                  className={this.state.tab === 'regTab' ? 'ActiveTab RegisterLink' : 'RegisterLink'}
                  onClick={() => this.tabChange('regTab')}>Registration
                </a>

                <a
                  className={this.state.tab === 'logTab' ? 'ActiveTab LoginLink' : 'LoginLink'}
                  onClick={() => this.tabChange('logTab')}>Login
                </a>

            </div>
          </div>

          <div className="">
            {this.state.tab === 'logTab' ?
              <Login/>
              :
              <Registration/>
            }
          </div>

        </div>
      </div>
    );
  }
}


export default Authentication;