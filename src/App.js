import React from 'react';
import {Route} from 'react-router-dom';
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
    <Route {...rest} render={matchProps => {
      let username = JSON.parse(localStorage.getItem('username'));

      if(username === null) {
        return (
          <div className="PrivateLayout">
            <Component {...matchProps} />
          </div>
        )
      } else {
        return <h1>ERROOOOOOOOR!</h1>
      }



    }}/>
  )
};


class App extends React.Component {
  render() {
    return (
      <div className='App'>

        <Route path="/authentication" component={Authentication}/>

        <PrivateLayout exact path="/" component={Users}/>
        <PrivateLayout path="/workflow" component={Users}/>
        <PrivateLayout path="/statistics" component={Users}/>
        <PrivateLayout path="/calendar" component={Users}/>
        <PrivateLayout path="/users" component={Users}/>
        <PrivateLayout path="/settings" component={Users}/>
        <PrivateLayout path="/login" component={Users}/>
        <PrivateLayout path="/registration" component={Users}/>

      </div>
    );
  }
}

export default App;
