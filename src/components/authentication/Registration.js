import React from 'react';
import { withRouter } from 'react-router-dom';

//components
import WelcomeButton from '../buttons/WelcomeButton';


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
    alert('Registration successful! Please log in!')
  };

  handleChange = (e) => {
    let name = e.target.name;
    this.setState({
      [name]:e.target.value
    })
  };

  render() {

    console.log(this.state);


    return(
      <div className="Registration">
        <h2 className={'welcome'}>Welcome!</h2>
        <form className='reg-form' onSubmit={this.handleSubmit}>
          <div>
            <input
              placeholder="Username"
              type="text"
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input
              placeholder="Password"
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

export default withRouter(Registration);