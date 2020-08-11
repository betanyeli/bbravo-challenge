import React from "react";
import useStyles from "./Styles";
import {Typography} from '@material-ui/core';
import Copyright from './Copyright'

export const Footer = () => {
  const styles = useStyles();
  return (
    <footer className={styles.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Tind-KedIn
      </Typography>
      <Copyright />
    </footer>
  );
};

export default Footer;
