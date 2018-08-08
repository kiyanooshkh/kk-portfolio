import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import profile from '../images/kiyanoosh-profile.jpg';

const styles = {
  row: {
    marginTop:65,
  },
  avatar: {
    margin:'0 auto',
    width: 200,
    height: 200,
  },
  text:{
    textAlign:'center',
    color: '#fff',
    textTransform:'uppercase',
    fontSize: 15,
  }
};

function Avatars(props) {
  const { classes } = props;

  return (
    <div className={classes.row}>
      <Avatar alt="profile image" src={profile} className={classes.avatar} />
      <p className={classes.text}>{props.name}</p>
    </div>
  );
}

export default withStyles(styles)(Avatars);
