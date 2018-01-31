import React from 'react';
import { Route } from 'react-router-dom';

import Home from './ui/home/Home'
import Workflow from './ui/workflow/Workflow'
import Statistics from './ui/statistics/Statistics'
import Calendar from './ui/calendar/Calendar'
import Users from './ui/users/Users'
import Login from './ui/login/Login'



class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Route exact path="/" component={Home} />
        <Route path="/workflow" component={Workflow} />
        <Route path="/statistics" component={Statistics} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/users" component={Users} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
