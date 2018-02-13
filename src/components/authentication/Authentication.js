import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Login from './Login'
import './Authentication.css'
import logo from '../../assets/img/logo.png'
import Registration from "./Registration";


function TabContainer({children, dir}) {
  return (
    <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
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
            <AppBar position="static" color="default">
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
            </AppBar>
          </div>
          <SwipeableViews
            className={'views-wrap'}
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer dir={theme.direction}><Registration/></TabContainer>
            <TabContainer dir={theme.direction}><Login/></TabContainer>
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

// class Authentication extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       slideIndex: 1
//     };
//   }
//
//   handleChange = (value) => {
//     this.setState({
//       slideIndex: value
//     });
//   };
//
//   render() {
//     return (
//       <div className='Authentication'>
//         <div className="auth-wrapp">
//
//           <div className='auth-box'>
//
//               <img src={logo} alt="Logo"/>
//
//               <Tabs
//                 className='auth'
//                 onChange={this.handleChange}
//                 value={this.state.slideIndex}
//               >
//                 <Tab className='register' label="Register" value={0}/>
//                 <Tab className='login' label="Login" value={1}/>
//               </Tabs>
//
//           </div>
//           <SwipeableViews
//             className={'views-wrap'}
//             index={this.state.slideIndex}
//             onChangeIndex={this.handleChange}
//           >
//             <Registration/>
//             <Login/>
//
//
//
//           </SwipeableViews>
//         </div>
//       </div>
//     )
//   }
// }

export default withStyles(styles, {withTheme: true})(Authentication);