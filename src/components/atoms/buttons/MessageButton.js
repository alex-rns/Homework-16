import React from 'react';
import FontAwesome from 'react-fontawesome';
import './MessageButton.css'

class MessageButton extends React.Component {
  render() {
    return (
      <button className='message-button'>
        <FontAwesome
          className='icon-message-button'
          name='envelope'
          size='2x'
        />
      </button>
    )
  }
}

export default MessageButton;