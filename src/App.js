import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
// import {Route} from 'react-router-dom';
import './App.css'
import Workflow from "./components/workflow/Workflow";
import Login from "./components/authentication/Login";
import Registration from "./components/authentication/Registration";
import Calendar from "./components/calendar/Calendar";
import Statistics from "./components/statistics/Statistics";
import Settings from "./components/settings/Settings";
import Home from "./components/home/Home";
import Users from "./Private";
import Authentication from "./components/authentication/Authentication";


const PrivateLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={() => {
      let username = JSON.parse(localStorage.getItem("username"));

      if (username === null) {
        return <Component/>
      } else {
        return <Redirect to="/authentication"/>
      }

    }}/>
  )
};


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>


          <Route path="/authentication" component={Authentication}/>

          <PrivateLayout exact path="/" component={Users}/>
          <PrivateLayout exact path="/workflow" component={Users}/>
          <PrivateLayout exact path="/statistics" component={Users}/>
          <PrivateLayout exact path="/calendar" component={Users}/>
          <PrivateLayout exact path="/users" component={Users}/>
          <PrivateLayout exact path="/settings" component={Users}/>
        </Switch>

      </div>
    );
  }
}

export default App;
