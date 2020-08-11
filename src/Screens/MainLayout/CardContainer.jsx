import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import ReportIcon from "@material-ui/icons/Report";
import useStyles from "./Styles";
import * as ApiManager from "../../Api/ApiManager";

export const CardContainer = () => {
  const styles = useStyles();
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
    <Container className={styles.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {data.map((card) => (
          <Grid item key={card.email} xs={12} sm={6} md={4}>
            <Card className={styles.card}>
              <CardMedia
                className={styles.cardMedia}
                image={card.picture.large}
                title="Image title"
              />
              <CardContent className={styles.cardContent}>
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
                  {card.location.country} . I am a {randomizer(occupation)} and
                  I like to {randomizer(hobbies)}
                </Typography>
              </CardContent>
              <CardActions>
                <Tooltip title="Match!" aria-label="Match">
                  <IconButton color="secondary">
                    <FavoriteIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Add to favorites" aria-label="add to favorites">
                <IconButton color="primary">
                  <StarIcon />
                </IconButton>
                </Tooltip>

                <Tooltip title="Send an email" aria-label="send an email">
                <IconButton color="primary">
                  <EmailIcon />
                </IconButton>
                </Tooltip>

                <Tooltip title="Call it" aria-label="call it">
                <IconButton color="primary">
                  <CallIcon />
                </IconButton>
                </Tooltip>

                <Tooltip title="Report and block this user" aria-label="report and block">
                <IconButton color="secondary">
                  <ReportIcon />
                </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardContainer;
