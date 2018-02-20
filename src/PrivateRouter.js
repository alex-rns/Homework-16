import React from 'react';
import { Route, Redirect} from 'react-router-dom';

//components
import TopBar from './components/topBar/TopBar';
import LeftBar from './components/leftBar/LeftBar';

const PrivateRouter = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => {
      let username = JSON.parse(localStorage.getItem("username"));
      let password = JSON.parse(localStorage.getItem("password"));
      let loggedData = JSON.parse(localStorage.getItem("logged"));

      if ((username) && (password) && (loggedData)) {

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