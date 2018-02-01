import React from 'react';

import Main from './Main'
import LeftBar from './components/leftBar/LeftBar';
import TopBar from './components/topBar/TopBar';

import RaisedButton from 'material-ui/RaisedButton'

class Project extends React.Component {
  render() {
    return (
      <div className='Project'>

        <TopBar/>
        <LeftBar/>
        <Main/>
        <RaisedButton label="Default" />

      </div>
    );
  }
}

export default Project;
