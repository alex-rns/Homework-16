import React from 'react';
import { withRouter } from 'react-router-dom';


//components
import WelcomeButton from '../buttons/WelcomeButton';

//MUI
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit*-5,
    padding: '10px 22px',
    width: 500,
    fontSize: 28
  },
  textFieldRoot: {
    padding: 0,
    fontSize: 24,
    fontWeight: 300
  },
  textFieldInput: {
    fontSize: 24,
    padding: '5px 60px'
  },

  textFieldFormLabel: {
    paddingLeft: 75,
    fontSize: 24,
    fontWeight: 300
  },
});


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

    const { classes } = this.props;

    console.log(this.state);

    const iconStyles = {
      marginRight: -16,
      fontSize: 32
    };

    return(
      <div className="Login">
        <h2 className={'welcome'}>Welcome <span>back!</span></h2>
        <form className='login-form' onSubmit={this.handleSubmit} >

          <div>
            <Icon style={iconStyles} color="primary">person_outline
            </Icon>
            <TextField
              // className={classes.textField}
              label="Username"
              type="text"
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
              // InputProps={{
              //   classes: {
              //     root: classes.textFieldRoot,
              //     input: classes.textFieldInput
              //   },
              // }}
              // InputLabelProps={{
              //   className: classes.textFieldFormLabel,
              // }}
            />
          </div>

          <div>
            <Icon style={iconStyles} color="primary">lock_outline
            </Icon>
            <TextField
              // className={classes.textField}
              label="Password"
              variant="password"
              type="password"
              name='password'
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handleChange}
              // InputProps={{
              //   classes: {
              //     root: classes.textFieldRoot,
              //     input: classes.textFieldInput
              //   },
              // }}
              // InputLabelProps={{
              //   className: classes.textFieldFormLabel,
              // }}
            />
          </div>

          <WelcomeButton/>
        </form>

      </div>
    )
  }
}

export default withRouter(Login);