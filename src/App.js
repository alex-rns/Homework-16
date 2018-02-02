import React from 'react';
import Main from './Main'
import './App.css'
import LeftBar from './components/leftBar/LeftBar';
import TopBar from './components/topBar/TopBar';

class App extends React.Component {
  render() {
    return (
      <div className='Project'>

        <TopBar/>
        <LeftBar/>
        <Main/>


      </div>
    );
  }
}

export default App;
