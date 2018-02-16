import React from 'react';
import Reboot from 'material-ui/Reboot';
import {Switch, Route} from 'react-router-dom';
import './App.css'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

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


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#5584ff',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f83c7b',
      dark: '#ba000d',
      contrastText: '#000',
    }
  },

  typography: {
    display3: {
      fontWeight: 500,
      fontSize: 70
    },
    button: {
      fontSize: '2.0rem',
      textTransform: 'capitalize',
    }
  }
});


class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className='App'>

          <Reboot/>

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
      </MuiThemeProvider>
    );
  }
}

export default App;
