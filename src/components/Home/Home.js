import React, { Component, Fragment } from "react";
import axios from "axios";
// import { Typography } from "@material-ui/core";
import { connect } from "react-redux";

import * as actionTypes from "../../store/actions/actionTypes";
import FlixCarousel from "./FlixCarousel";
import FlixCollection from "./FlixCollection";
import Spinner from "../Spinner";

class Home extends Component {
  state = {
    flix: [],
    spin: false,
  };

  componentDidMount() {
    this.setState({ ...this.state, spin: true });
    axios
      .get("https://notflix-node-api.herokuapp.com/getAllFlix")
      .then((res) => {
        if (res.data) {
          let allFlix = res.data;
          console.log("allflix res", allFlix);
          this.setState({ flix: allFlix, spin: false });
        }
      })
      .catch((err) => {
        console.log("Unable to getFlix", err);
      });
  }

  render() {
    console.log("Initial State", this.props.initialState.isAuthorized);

    return (
      <Fragment>
        {/* <Typography variant="h4" component="h1">
          {this.props.selectedFlix}
        </Typography> */}

        <Spinner visible={this.state.spin} />

        <FlixCarousel />

        <FlixCollection name={"Wishlist"} flix={this.state.flix} />

        {this.props.preferredLang.map((lang, index) => {
          let langCollection = this.state.flix.filter((flix) => {
            return flix.languages.includes(lang);
          });
          return (
            <FlixCollection
              key={lang + index}
              name={lang}
              flix={langCollection}
            />
          );
        })}

        {this.props.preferredGenre.map((genre, index) => {
          let genreCollection = this.state.flix.filter((flix) => {
            return flix.genre.includes(genre);
          });
          return (
            <FlixCollection
              key={genre + index}
              name={genre}
              flix={genreCollection}
            />
          );
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialState: state.auth,
    isAuth: state.auth.isAuthorized,
    expiresIn: state.auth.expiresIn,
    preferredLang: state.auth.preferredLang,
    preferredGenre: state.auth.preferredGenre,
    selectedFlix: state.flix.selectedFlix,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(actionTypes.logoutCreator());
    },
    onFlixSelection: () => {
      dispatch({ type: "SELECTED-FLIX" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
