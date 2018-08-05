import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as color from '../common/colors';
import Avatar from './avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
    background: color.primaryblue,
    marginTop:60
  }
};

function Carousel(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar/>
    </div>
  );
}

export default withStyles(styles)(Carousel);
