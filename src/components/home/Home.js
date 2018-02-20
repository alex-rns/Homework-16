import React from 'react';


class Home extends React.Component {
  render() {

    const userName = JSON.parse(localStorage.getItem("userName"));

    return(
      <div className="Home">
        <h2>Hello {userName}</h2>
      </div>
    )
  }
}

export default Home;