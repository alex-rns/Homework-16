import React from 'react';
import FontAwesome from 'react-fontawesome';
import './BarMessageButton.css'

class MessageButton extends React.Component {
  render() {
    return (
      <button className='789789'>
        <FontAwesome
          className='icon-messages-box-button'
          name='cog'
        />
      </button>
    )
  }
}

export default MessageButton;