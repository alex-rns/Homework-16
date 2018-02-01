import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Project from './Project'


class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Project/>
      </MuiThemeProvider>
    );
  }
}

export default App;
