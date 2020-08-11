import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import useStyles from "./Styles";
import * as ApiManager from "../../Api/ApiManager";
import Appbar from "./Appbar";
import Footer from "./Footer";
import Info from "./Info";

export default function MainLayout() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await ApiManager.getData();

      setData(result);
    }
    getData();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Appbar />
      <main>
        <Info />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {data.map((card) => (
              <Grid item key={card.email} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.picture.large}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name.title} . {card.name.last}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <Footer />
    </React.Fragment>
  );
}
