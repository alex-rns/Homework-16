import React from 'react';
import AppBar from 'material-ui/AppBar';
class TopBar extends React.Component {
  render() {
    return(
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    )
  }
}

export default TopBar;