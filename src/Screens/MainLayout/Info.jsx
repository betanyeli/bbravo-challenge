import React from "react";
import useStyles from "./Styles";
import { Typography, Container, Grid, Button } from "@material-ui/core";

export const Info = () => {
  const styles = useStyles();
  return (
    <div className={styles.infoContent}>
      <Container maxWidth="sm">
          <Grid item xs={12}>
          <Typography
        style={ {fontSize:'8vw',
        fontWeight:600}}
          component="h1"
          variant="h2"
          align="center"
          color="initial"
          gutterBottom
        >
          Meet new people
        </Typography>
          </Grid>
        

        <div className={styles.infoButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="outlined" color="secondary">
                Sign in
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="secondary">
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Info;
