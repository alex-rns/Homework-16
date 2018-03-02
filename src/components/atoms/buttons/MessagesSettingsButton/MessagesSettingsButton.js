import React from 'react';
import FontAwesome from 'react-fontawesome';
import './MessagesSettingsButton.css'

class MessagesSettingsButton extends React.Component {
  render() {
    return (
      <button className='MessagesSettingsButton'>
        <FontAwesome
          className='icon-messages-box-button'
          name='cog'
        />
      </button>
    )
  }
}

export default MessagesSettingsButton;