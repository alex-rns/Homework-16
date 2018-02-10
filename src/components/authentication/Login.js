import React from 'react';

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

    return(
      <div className="Login">
        LOGIN
        <form onSubmit={this.handleSubmit}>
          <button>Submit</button>
          <input
            type="text"
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>

      </div>
    )
  }
}

export default Login;