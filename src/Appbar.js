import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Blood Donation App
          </Typography>
          <Link to='/home'><Button color="inherit">Home</Button></Link>
          <Link to='/about'><Button color="inherit">About</Button></Link>
          <Link to='/dashboard'><Button color="inherit">Dashboard</Button></Link>
          <Link to='/contact'><Button color="inherit">Contact</Button></Link>
          <Link to='/signin'><Button color="inherit">Login</Button></Link>
          <Link to='/signup'><Button color="inherit">Create New Account</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);