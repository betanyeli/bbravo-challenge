import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import useStyles from "./Styles";

const Appbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Tind-kedIn
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
