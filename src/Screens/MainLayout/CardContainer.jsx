import React, { useState, useEffect } from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container} from "@material-ui/core";
import useStyles from "./Styles";
import * as ApiManager from "../../Api/ApiManager";


export const CardContainer = () => {
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
                  This is a media card. You can use this section to describe the
                  content.
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
  );
}

export default CardContainer;