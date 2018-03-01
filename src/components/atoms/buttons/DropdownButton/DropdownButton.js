import React from 'react';
import FontAwesome from 'react-fontawesome';
import './DropdownButton.css'

//components


class DropdownButton extends React.Component {
  render() {
    return (
      <button className='DropdownButton'>
        <FontAwesome
          className='dropdown-button-icon'
          name='ellipsis-v'
          size='2x'
        />
      </button>
    )
  }
}

export default DropdownButton;