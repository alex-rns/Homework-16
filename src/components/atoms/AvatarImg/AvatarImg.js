import React from 'react';

class AvatarImg extends React.Component {

  render() {
    return (
      <div className='AvatarImg'>
        <img src={this.props.dataImg} alt="AvatarImg"/>
      </div>
    )
  }
}

export default AvatarImg;