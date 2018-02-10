import React from 'react';

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

    return(
      <div className="Registration">
          REGISTER
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

export default Registration;