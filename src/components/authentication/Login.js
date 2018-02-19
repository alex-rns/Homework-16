import React from 'react';
import { withRouter } from 'react-router-dom';


//components
import WelcomeButton from '../buttons/WelcomeButton';



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
    localStorage.setItem("logged", JSON.stringify("logged"));

    const { history } = this.props;

    console.log(username, this.state.username);
    console.log(password, this.state.password);

    if((username === this.state.username)&&(password === this.state.password)){
      console.log('user should login');

      history.push('/')
    } else {
      console.log('wrong name or password');
      alert("wrong name or password");
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

    return(
      <div className="Login">
        <h2 className={'welcome'}>Welcome <span>back!</span></h2>
        <form className='login-form' onSubmit={this.handleSubmit} >

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

export default withRouter(Login);