import React from 'react';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';


const style = {
  borderRadius: 50

};

const WelcomeButton = () => (
    <Button
      label="Enter"
      labelPosition="before"
      icon={<Icon className="material-icons">keyboard_arrow_right
      </Icon>}
      primary={true}
      style={style}
    />
);

export default WelcomeButton;