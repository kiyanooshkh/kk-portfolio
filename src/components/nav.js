import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from './menu';
import '../css/tools.css';

const styles = {
  flex: {
    flexGrow: 1,
  },
};

function Navigation(props) {
  const { classes } = props;
  return (
      <AppBar position="static">
      <Toolbar className="container">
          <Typography variant="title" color="inherit" className={classes.flex}>
            Logo
          </Typography>
          <Menu/>
        </Toolbar>
      </AppBar>
  );
}

export default withStyles(styles)(Navigation);
