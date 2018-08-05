import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import profile from '../images/kiyanoosh-profile.jpg';

const styles = {
  avatar: {
    margin: 60,
    width: 200,
    height: 200,
  },
};

function Avatars(props) {
  const { classes } = props;
  return (
    <div>
      <Avatar alt="profile image" src={profile} className={classes.avatar} />
    </div>
  );
}

export default withStyles(styles)(Avatars);
