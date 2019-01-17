import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './NavBar2.css'

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        
        <div className="list-wrapper">
         
          <Button className="top-nav-buttons supplies-button">GIVE SUPPLIES</Button>
          <Button className="top-nav-buttons">GIVE TIME</Button>
          <Button className="top-nav-buttons">GIVE MONEY</Button>
          </div>
       
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);