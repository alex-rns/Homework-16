import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});


function WelcomeButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button type="submit" className={classes.button} variant="raised" color="primary">
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