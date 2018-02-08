import React from 'react';
import './App.css'
import LeftBar from './components/leftBar/LeftBar';
import TopBar from './components/topBar/TopBar';
import Main from "./Main";

class Private extends React.Component {
  render() {
    return (
      <div className='Private'>
        <TopBar/>
        <LeftBar/>
        <Main/>

      </div>
    );
  }
}

export default Private;
