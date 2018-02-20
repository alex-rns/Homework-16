import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css'

//components
import Workflow from "./components/workflow/Workflow";
import Calendar from "./components/calendar/Calendar";
import Statistics from "./components/statistics/Statistics";
import Settings from "./components/settings/Settings";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Authentication from "./components/authentication/Authentication";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PrivateRouter from "./PrivateRouter";


const App =() => {
    return (
        <div className='App'>

          <Switch>

            <Route exact path="/authentication" component={Authentication}/>

            <PrivateRouter exact path="/" component={Home}/>
            <PrivateRouter exact path="/workflow" component={Workflow}/>
            <PrivateRouter exact path="/statistics" component={Statistics}/>
            <PrivateRouter exact path="/calendar" component={Calendar}/>
            <PrivateRouter exact path="/users" component={Users}/>
            <PrivateRouter exact path="/settings" component={Settings}/>

            <Route component={PageNotFound}/>

          </Switch>
        </div>
    );
};

export default App;
