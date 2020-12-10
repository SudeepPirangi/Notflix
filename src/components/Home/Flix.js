import React, { Fragment } from "react";
import { Container } from "@material-ui/core";
import moment from "moment";

import SessionValidator from "../SessionValidator";

const Flix = (props) => {
  const flix = props.location.state || props.flix;
  console.log(flix, props.location.state, props.flix);
  if (flix) {
    return (
      <Fragment>
        <SessionValidator />

        <h1>{flix.title}</h1>
        <Container>
          <img src={flix.videoUrl} alt={flix.title} />
        </Container>
        <div className="rowFlexi">
          <div className="flexItem labelFlexi">
            <p className="title">Title : </p>
            <p className="imdb">IMDB : </p>
            <p className="category">Category : </p>
            <p className="genre">Genre : </p>
            <p className="lang">Languages : </p>
            <p className="release">Released : </p>
            <p className="desc">Description : </p>
          </div>
          <div className="flexItem valueFlexi">
            <p className="title">{flix.title}</p>
            <p className="imdb">{flix.imdb == null ? "N/A" : flix.imdb}</p>
            <p className="category">{flix.category}</p>
            <p className="genre">{flix.genre.join(", ")}</p>
            <p className="lang">{flix.languages.join(", ")}</p>
            <p className="release">
              {moment(flix.releasedDate).format("Do MMMM YYYY")}
            </p>
            <p className="desc">{flix.desc}</p>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return <h1>No data to display</h1>;
  }
};

export default Flix;
