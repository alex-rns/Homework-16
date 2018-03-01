import React from 'react';
import './CircleLetter.css'

//components


class CircleLetter extends React.Component {
  render(){
    return(
      <div className='CircleLetter'>
        <span>{this.props.dataLetter.charAt(0)}</span>
      </div>
    )
  }
}

export default CircleLetter;