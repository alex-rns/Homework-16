import React from 'react';
import PropTypes from 'prop-types';

//MUI
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  button: {
    fontSize: theme.typography.button.fontSize,
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 135,
    paddingRigth: 25,
    borderRadius: 50,
    margin: theme.spacing.unit*6
  },
  rightIcon: {
    marginLeft: theme.spacing.unit*15,
  },
});

function WelcomeButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button
        size="large"
        type="submit"
        className={classes.button}
        variant="raised"
        color="primary"
      >
        Enter
        <Icon className={classes.rightIcon}>keyboard_arrow_right
        </Icon>
      </Button>

    </div>
  );
}
WelcomeButton.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(WelcomeButton);