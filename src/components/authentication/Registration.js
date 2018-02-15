import React from 'react';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
// import { blueA200 } from 'material-ui/colors/blue';
import WelcomeButton from '../buttons/WelcomeButton'

class Registration extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('your username - ', this.state.username, 'your pass - ', this.state.password);
    localStorage.setItem("username", JSON.stringify(this.state.username));
    localStorage.setItem("password", JSON.stringify(this.state.password));
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
      <div className="Registration">
        <h2 className={'welcome'}>Welcome!</h2>
        <form className='reg-form' onSubmit={this.handleSubmit}>
          <div>
            <Icon style={iconStyles} color="primary">person_outline
            </Icon>
            <TextField
              label="Username"
              type="text"
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <Icon style={iconStyles} color="primary">lock_outline
            </Icon>
            <TextField
              label="Password"
              variant="password"
              type="password"
              name='password'
              autoComplete="current-password"
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

export default Registration;