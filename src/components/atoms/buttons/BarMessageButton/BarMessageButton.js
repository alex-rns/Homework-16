import React from 'react';
import FontAwesome from 'react-fontawesome';
import './BarMessageButton.css'

class MessageButton extends React.Component {
  render() {
    return (
      <button className='bar-message-button'>
        <FontAwesome
          className='icon-bar-message-button'
          name='envelope'
          size='2x'
        />
      </button>
    )
  }
}

export default MessageButton;