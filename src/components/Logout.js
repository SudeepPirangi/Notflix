import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import * as actionTypes from "../store/actions/actionTypes";

export const Logout = (props) => {
  if (props.isAuthorized) {
    props.onLogout();
    return (
      <Fragment>
        <Typography component="h1" variant="h4">
          You have been logged-out successfully
        </Typography>
        <Button
          href="/login"
          className="watch"
          color="secondary"
          size="large"
          variant="contained"
          endIcon={<LockOpenIcon color="inherit" />}
          style={{ marginTop: 30 }}
        >
          Login Again
        </Button>
      </Fragment>
    );
  } else {
    return <Redirect to="/" />;
  }
};

const mapStateToProps = (state) => ({
  isAuthorized: state.auth.isAuthorized,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(actionTypes.logoutCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
