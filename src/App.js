import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css'
import LeftBar from './components/leftBar/LeftBar';
import TopBar from './components/topBar/TopBar';
import Workflow from "./components/workflow/Workflow";
import Calendar from "./components/calendar/Calendar";
import Statistics from "./components/statistics/Statistics";
import Settings from "./components/settings/Settings";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Authentication from "./components/authentication/Authentication";


class App extends React.Component {
  render() {

    const PrivateRouter = ({component: Component, ...rest}) => {
      return (
        <Route {...rest} render={matchProps => {
          let username = JSON.parse(localStorage.getItem("username"));
          let password = JSON.parse(localStorage.getItem("password"));

          if ((username !== null) && (password !== null)) {
            return (

              <div className='Private'>
                <TopBar/>
                <LeftBar/>
                <Component {...matchProps}/>
              </div>
            )
          } else {
            alert("Please log in");
            return <Redirect to="/authentication"/>
          }
        }}/>
      )
    };


    return (
      <div className='App'>
        <Switch>

          <Route path="/authentication" component={Authentication}/>

          <PrivateRouter exact path="/" component={Home}/>
          <PrivateRouter exact path="/workflow" component={Workflow}/>
          <PrivateRouter exact path="/statistics" component={Statistics}/>
          <PrivateRouter exact path="/calendar" component={Calendar}/>
          <PrivateRouter exact path="/users" component={Users}/>
          <PrivateRouter exact path="/settings" component={Settings}/>
        </Switch>

      </div>
    );
  }
}

export default App;
