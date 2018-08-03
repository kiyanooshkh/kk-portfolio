import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import profile from '../images/kiyanoosh-profile.jpg';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 70,
  },
  avatar: {
    margin: 10,
    width: 200,
    height: 200,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar alt="profile image" src={profile} className={classes.avatar} />
    </div>
  );
}

export default withStyles(styles)(ImageAvatars);
