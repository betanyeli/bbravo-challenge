import React from "react";
import useStyles from "./Styles";
import {Typography} from '@material-ui/core';
import Copyright from './Copyright'

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Tind-KedIn
      </Typography>
      <Copyright />
    </footer>
  );
};

export default Footer;
