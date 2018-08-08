import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as color from '../common/colors';
import Avatar from './avatar';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    background: color.primaryblue
  },
  marginTop: {
    marginTop: 60
  },
  button: {
    marginTop: 60,
    marginBottom: 30,
    backgroundColor: '#fff',
    color: '#9e9e9e',
    paddingRight:25,
    paddingLeft:25,
    borderRadius: 2
  }
};

function Carousel(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.row}>
        <div className={classes.marginTop}>
          <Avatar name="KIYANOOSH KHOSRAVI - PORTFOLIO" />
        </div>
      </div>
      <div className={classes.row}>
        <Chip label="Web Developer and UX Designer" className={classes.chip} />
      </div>
      <div className={classes.row}>
        <Button variant="contained" className={classes.button}>
          Learn More
      </Button>
      </div>
    </div>
  );
}

export default withStyles(styles)(Carousel);
