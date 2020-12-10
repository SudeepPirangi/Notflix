import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actionTypes from "../store/actions/actionTypes";

const SessionValidator = (props) => {
  console.log("Validating Session");

  const Validity = () => {
    if (props.isAuth) {
      const sessionExpiry = new Date(props.expiresIn) <= new Date();
      console.log("Previously logged-in user");
      if (sessionExpiry) {
        console.log("Session expired: clearing");
        props.onLogout();
        return <Redirect to="/login" />;
      }
      return null;
    } else {
      console.log("User not logged-in");
      return <Redirect to="/login" />;
    }
  };

  return <Validity />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthorized,
    expiresIn: state.auth.expiresIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(actionTypes.logoutCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionValidator);
