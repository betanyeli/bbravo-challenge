import React from "react";
import { Typography, Link, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

export const Copyright = () => {
  return (
    <React.Fragment>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/betanyeli-bravo/"
        >
          Develop with love by Beta
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      <Link color="inherit" href="https://www.linkedin.com/in/betanyeli-bravo/">
      <IconButton color="inherit" aria-label="Go to my LinkedIn profile">
        <LinkedInIcon />
      </IconButton>
      </Link>
     
      <Link color="inherit" href="https://github.com/betanyeli">
      <IconButton color="inherit" aria-label="Go to my Github profile">
        <GitHubIcon />
      </IconButton>
      </Link>

      <Link color="inherit" href="mailto:betangelii@gmail.com">
      <IconButton color="inherit" aria-label="Go to Email profile">
        <EmailIcon />
      </IconButton>
      </Link>
    </React.Fragment>
  );
};

export default Copyright;
