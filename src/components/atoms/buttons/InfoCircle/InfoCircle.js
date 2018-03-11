import React from 'react';
import './InfoCircle.css'

//components

class InfoCircle extends React.Component {
  render() {
    return (
      <div className='CircleLetter'>

          <span>
            {this.props.data || this.props.dataq}
          </span>


      </div>
    )
  }
}

export default InfoCircle;