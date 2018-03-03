import React from 'react';
import './Block.css';

class Block extends React.Component {
  render(){

    return(
      <div className={'Block ' + this.props.bg} >
        {this.props.children}
      </div>
    )
  }
}

export default Block;