import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/home/Home'
import Workflow from './components/workflow/Workflow'
import Statistics from './components/statistics/Statistics'
import Calendar from './components/calendar/Calendar'
import Users from './components/users/Users'
import Login from './components/login/Login'
import Settings from './components/settings/Settings'


class App extends React.Component {
  render() {
    return (
      <div className='App'>

        {/*{TopBar}*/}
        {/*(LeftBar)*/}
        {/*{Main}*/}

        <Route exact path="/" component={Home} />
        <Route path="/workflow" component={Workflow} />
        <Route path="/statistics" component={Statistics} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/users" component={Users} />
        <Route path="/settings" component={Settings} />
        <Route path="/login" component={Login} />


      </div>
    );
  }
}

export default App;
