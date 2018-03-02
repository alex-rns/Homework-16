import React from 'react';
import FontAwesome from 'react-fontawesome';
import './MessagesShareButton.css'

class MessagesShareButton extends React.Component {
  render() {
    return (
      <button className='MessagesShareButton'>
        <FontAwesome
          className='icon-messages-box-button'
          name='share'
          rotate={180}
          flip="horizontal"
        />
      </button>
    )
  }
}

export default MessagesShareButton;