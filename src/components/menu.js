import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  fontColor: {
    color:"#fff",
  },
};

function Menu (props) { 
  const { classes } = props;
      return (
        <div>
          <Button className={classes.fontColor}>Portfolio</Button>
          <Button className={classes.fontColor}>About</Button>
          <Button className={classes.fontColor}>Phototgraphy</Button>
          <Button className={classes.fontColor}>Contact</Button>
        </div>
      );
}

export default withStyles(styles)(Menu);

  

  
 