import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import useStyles from "./Styles";
import * as ApiManager from "../../Api/ApiManager";

export const CardContainer = () => {
  const classes = useStyles();
  const occupation = ApiManager.occupation;
  const hobbies = ApiManager.hobbies;
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await ApiManager.getData();

      setData(result);
    }
    getData();
  }, []);

  const randomizer = (arr) => {
    let result = arr[Math.floor(Math.random() * arr.length)];
    return result;
  };

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
                  Hello, everyone! I'm {card.name.first}{" "}
                  {card.gender === "male" ? (
                    <span role="img" aria-label="male">
                      🕺
                    </span>
                  ) : (
                    <span role="img" aria-label="female">
                      💃
                    </span>
                  )}{" "}
                  , {card.dob.age} years old, from {card.location.city} -{" "}
                  {card.location.country} . I am a {randomizer(occupation)} and I like to {randomizer(hobbies)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Send email
                </Button>
                <Button size="small" color="primary">
                  Call
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardContainer;
