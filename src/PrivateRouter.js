import React from 'react';
import {Route, Redirect} from 'react-router-dom';

//components
import Bar from './components/organisms/Bar'

const PrivateRouter = ({component: Component, ...rest}) => {

  return (
    <Route {...rest} render={matchProps => {

      if (localStorage.getItem('userCheck') === 'exist') {
        return (
          <div className='Private'>
            <Bar/>
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