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

    const { classes } = this.props;

    console.log(this.state);

    const iconStyles = {
      marginRight: -16,
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

export default withRouter(Registration);