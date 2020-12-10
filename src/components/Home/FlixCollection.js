import React from "react";
import {
  Container,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import BookmarkIcon from "@material-ui/icons/Bookmark";
// import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { useStyles } from "../../custom-theme";

const FlixCollection = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const allFlix = props.flix;

  const getGenreHandler = (genre, genreFlix) => {
    history.push("/group/" + genre, genreFlix);
  };

  const getFlixHandler = (flixId) => {
    let selectedFlix = null;
    allFlix.forEach((flix) => {
      if (flix._id === flixId) {
        selectedFlix = flix;
      }
    });
    history.push("/flix/" + flixId, selectedFlix);
  };

  const HorizontalFlixList = (props) => {
    // console.log("allFlix", allFlix);
    return (
      <GridList className={classes.gridList} cols={4}>
        {allFlix.map((flix) => (
          <GridListTile
            onClick={getFlixHandler.bind(this, flix._id)}
            key={flix._id}
            classes={{ tile: classes.gridTile }}
          >
            <img src={flix.thumbnailUrl} alt={flix.title} />
            <GridListTileBar
              title={flix.title}
              subtitle={flix.genre.join(", ")}
              classes={{
                root: classes.gridTileBar,
                subtitle: classes.subtitle,
              }}
              actionIcon={
                <IconButton>
                  <BookmarkIcon color="secondary" />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    );
  };

  if (props.flix) {
    return (
      <Container style={{ textAlign: "left" }}>
        <Typography variant="h6" component="h2" color="initial">
          {props.name}{" "}
          <span
            className="secondary"
            onClick={getGenreHandler.bind(this, props.name, props.flix)}
          >
            see more
          </span>
        </Typography>
        <HorizontalFlixList flix={props.flix} />
      </Container>
    );
  }
};

export default FlixCollection;
