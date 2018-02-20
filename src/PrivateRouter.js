import React from 'react';
import {Route, Redirect} from 'react-router-dom';

//components
import TopBar from './components/topBar/TopBar';
import LeftBar from './components/leftBar/LeftBar';


const PrivateRouter = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => {

      if (localStorage.getItem('userCheck') === 'exist') {
        return (
          <div className='Private'>
            <TopBar/>
            <LeftBar/>
            <div className='content'>
              <Component {...matchProps}/>
            </div>
          </div>
        )
      } else {
        alert("Wrong password or username ");
        return (
          <Redirect to="/authentication"/>
        )
      }

    }}/>
  )
};

export default PrivateRouter;