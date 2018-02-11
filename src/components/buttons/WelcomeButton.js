import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';


const style = {
  borderRadius: 50

};

const WelcomeButton = () => (
    <RaisedButton
      label="Enter"
      labelPosition="before"
      icon={<FontIcon className="material-icons">keyboard_arrow_right
      </FontIcon>}
      primary={true}
      style={style}
    />
);

export default WelcomeButton;