import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import './Authentication.css';

//components
import Registration from "./Registration";
import Login from './Login';
import logo from '../../assets/img/logo.png';

//MUI
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';




function TabContainer({children, dir}) {
  return (
    <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
});

class Authentication extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({value});
  };

  handleChangeIndex = index => {
    this.setState({value: index});
  };

  render() {
    const {classes, theme} = this.props;

    return (

      <div className={classes.root}>
        <div className="auth-wrapp">
          <div className='auth-box'>
            <img src={logo} alt="Logo"/>
            <div>
              <Tabs
                className="auth"
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                fullWidth
              >
                <Tab className='register' label="Register"/>
                <Tab className='login' label="Login"/>
              </Tabs>
            </div>
          </div>

          <SwipeableViews
            className={'views-wrap'}
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer dir={theme.direction}>
              <Registration/>
            </TabContainer>
            <TabContainer dir={theme.direction}>
              <Login/>
            </TabContainer>

          </SwipeableViews>
        </div>
      </div>
    );
  }
}

Authentication.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Authentication);