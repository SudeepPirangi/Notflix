import React from "react";
import { useHistory } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const FlixCarousel = (props) => {
  return (
    <Carousel
      animation="fade"
      autoPlay={true}
      navButtonsAlwaysVisible={true}
      fullHeightHover={true}
    >
      {carouselFlix.map((flix) => (
        <CarouselItem key={flix._id} flix={flix} />
      ))}
    </Carousel>
  );
};

const CarouselItem = (props) => {
  const history = useHistory();

  const getFlixHandler = (flixId) => {
    let selectedFlix = null;
    carouselFlix.forEach((flix) => {
      if (flix._id === flixId) {
        selectedFlix = flix;
      }
    });
    history.push("/flix/" + flixId, selectedFlix);
  };

  return (
    <Paper variant="elevation" className="carouselHolder">
      <img src={props.flix.thumbnailUrl} alt={props.flix.title} />
      <div className="flixInfo">
        <h2>{props.flix.title}</h2>
        <p className="imdb">
          <strong>IMDb: </strong>
          {props.flix.imdb}
        </p>
        <p className="genre">
          <strong>Genre: </strong>
          {props.flix.genre.join(", ")}
        </p>
        <Button
          className="watch"
          color="secondary"
          size="large"
          variant="contained"
          endIcon={<PlayCircleFilledIcon color="inherit" />}
          onClick={getFlixHandler.bind(this, props.flix._id)}
        >
          Watch Now
        </Button>
      </div>
    </Paper>
  );
};

const carouselFlix = [
  {
    thumbnailUrl: "https://via.placeholder.com/150.jpg",
    videoUrl: "https://via.placeholder.com/500.jpg",
    genre: ["Documentary"],
    languages: ["English", "Malai", "Thai"],
    _id: "5f85b348fc2173092415558a",
    title: "Green House",
    desc: "Sample Description",
    category: "Documentary",
    releaseDate: "2019-12-31T18:30:00.000Z",
    imdb: 7.2,
    createdAt: "2020-10-13T14:01:45.027Z",
    updatedAt: "2020-11-01T15:09:12.870Z",
    __v: 5,
  },
  {
    thumbnailUrl: "https://via.placeholder.com/150.jpg",
    videoUrl: "https://via.placeholder.com/500.jpg",
    genre: ["Horror", "Comedy"],
    languages: ["Tamil", "Telugu"],
    _id: "5f85b4e34c748809c6fb3d0c",
    title: "In Pursuit of Crappiness",
    desc: "Sample Description",
    category: "Documentary",
    releaseDate: "2019-12-31T18:30:00.000Z",
    imdb: 7.2,
    createdAt: "2020-10-13T14:08:35.248Z",
    updatedAt: "2020-11-01T15:32:34.085Z",
    __v: 3,
  },
  {
    thumbnailUrl: "https://via.placeholder.com/150.jpg",
    videoUrl: "https://via.placeholder.com/500.jpg",
    genre: ["Romantic", "Comedy"],
    languages: ["English", "French"],
    _id: "5f86773f01a4ae5aeeb3e475",
    title: "French Rom-Com",
    desc: "Sample Description",
    category: "TV",
    releaseDate: "2019-12-31T18:30:00.000Z",
    imdb: 5,
    createdAt: "2020-10-14T03:57:51.419Z",
    updatedAt: "2020-11-01T14:59:40.862Z",
    __v: 1,
  },
];

export default FlixCarousel;
