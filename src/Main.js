import React from 'react';
import { Route } from 'react-router-dom';

import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Workflow from "./components/workflow/Workflow";
import Statistics from "./components/statistics/Statistics";
import Calendar from "./components/calendar/Calendar";
import Settings from "./components/settings/Settings";
import Login from "./components/login/Login";

class Main extends React.Component {
  render() {
    return(
      <div className="Main">
        <Route exact path="/" component={Home} />
        <Route path="/workflow" component={Workflow} />
        <Route path="/statistics" component={Statistics} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/users" component={Users} />
        <Route path="/settings" component={Settings} />
        <Route path="/login" component={Login} />
      </div>


    )
  }
}

export default Main;