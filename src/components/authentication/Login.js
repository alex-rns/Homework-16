import React from 'react';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import { blueA200 } from 'material-ui/colors/blue';
import WelcomeButton from '../buttons/WelcomeButton'


class Login extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('username - ', this.state.username, 'pass - ', this.state.password);

    let username = JSON.parse(localStorage.getItem("username"));
    let password = JSON.parse(localStorage.getItem("password"));

    console.log(username, this.state.username);
    console.log(password, this.state.password);

    if((username === this.state.username)&&(password === this.state.password)){
      console.log('user should login');
    } else {
      console.log('wrong name or password');
    }
  };

  handleChange = (e) => {
    let name = e.target.name;
    this.setState({
      [name]:e.target.value
    })
  };

  render() {

    console.log(this.state);

    const iconStyles = {
      marginRight: 22,
      fontSize: 32
    };

    return(
      <div className="Login">
        <h2 className={'welcome'}>Welcome <span>back!</span></h2>
        <form className='login-form' onSubmit={this.handleSubmit}>

          <div>
            <Icon
              style={iconStyles}
              className="material-icons"
              color={blueA200}>person_outline
            </Icon>
            <TextField
              hintText="Username"
              type="text"
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <Icon
              style={iconStyles}
              className="material-icons"
              color={blueA200}>lock_outline
            </Icon>
            <TextField
              hintText="Password"
              type="password"
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <WelcomeButton/>
        </form>

      </div>
    )
  }
}

export default Login;