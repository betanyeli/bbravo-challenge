import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from "./Styles";

const Appbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative" className={classes.background}>
      <Toolbar>
        <FavoriteBorderIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Tind-kedIn
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
