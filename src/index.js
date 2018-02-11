import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {
  cyan500, cyan700,
  blueA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,

    accent1Color: blueA200,

    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack,
  },
});


ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App/>
    </MuiThemeProvider>
  </BrowserRouter>
  , document.getElementById('root')
);
