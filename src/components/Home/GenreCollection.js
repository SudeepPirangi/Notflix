import React, { Fragment } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { useStyles } from "../../custom-theme";
import { useHistory } from "react-router-dom";

const GenreCollection = (props) => {
  const flixArray = props.location.state;
  const classes = useStyles();
  const history = useHistory();

  const getFlixHandler = (flixId) => {
    let selectedFlix = null;
    flixArray.forEach((flix) => {
      if (flix._id === flixId) {
        selectedFlix = flix;
      }
    });
    history.push("/flix/" + flixId, selectedFlix);
  };

  return (
    <Fragment>
      <h1>{props.match.params.genre} Collection</h1>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="stretch"
        spacing={1}
        className={classes.Grid}
      >
        {flixArray.map((flix) => {
          return (
            <Grid key={flix._id} item xs={12} sm={4} md={3}>
              <Card className={classes.Card} raised>
                <CardHeader
                  title={flix.title}
                  subheader={flix.genre.join(", ")}
                />
                <CardMedia
                  className={classes.CardMedia}
                  image={flix.thumbnailUrl}
                  title={flix.title}
                  onClick={getFlixHandler.bind(this, flix._id)}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {flix.desc}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to wishlist">
                    <BookmarkIcon color="secondary" />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default GenreCollection;
