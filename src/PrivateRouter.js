import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import TopBar from './components/topBar/TopBar';
import LeftBar from './components/leftBar/LeftBar';

const PrivateRouter = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => {
      let username = JSON.parse(localStorage.getItem("username"));
      let password = JSON.parse(localStorage.getItem("password"));

      if ((username !== null) && (password !== null)) {
        return (

          <div className='Private'>
            <TopBar/>
            <LeftBar/>
            <Component {...matchProps}/>
          </div>
        )
      } else {
        alert("Please log in");
        return <Redirect to="/authentication"/>
      }



    }}/>
  )
};

export default PrivateRouter;