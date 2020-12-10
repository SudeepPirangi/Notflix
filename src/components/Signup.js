import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import {
  Grid,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import * as actionTypes from "../store/actions/actionTypes";

export const Signup = (props) => {
  const [signupData, setSignupData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setSignupData({ ...signupData, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setSignupData({ ...signupData, showPassword: !signupData.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowConfirmPassword = () => {
    setSignupData({
      ...signupData,
      showConfirmPassword: !signupData.showConfirmPassword,
    });
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const signupSubmitHandler = (event) => {
    event.preventDefault();
    let signupFormData = {
      firstname: signupData.firstname,
      lastname: signupData.lastname,
      email: signupData.email,
      password: signupData.password,
      confirmPassword: signupData.confirmPassword,
    };
    // console.log("signupFormData", signupFormData);
    props.onSignupSubmit(signupFormData);
  };

  const SignupError = () => {
    if (props.signupError && props.signupError.length > 0) {
      return (
        <Typography
          component="h2"
          variant="h6"
          style={{ fontWeight: "bold", color: "red", marginTop: 20 }}
        >
          {props.signupError}
        </Typography>
      );
    } else {
      return null;
    }
  };

  if (props.isAuth) {
    return <Redirect to="/" />;
  } else {
    return (
      <Fragment>
        <Typography component="h1" variant="h4">
          User Signup
        </Typography>

        <SignupError />

        <Grid container justify="center">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <form noValidate autoComplete="off" onSubmit={signupSubmitHandler}>
              <FormControl variant="filled" fullWidth margin="normal">
                <InputLabel htmlFor="filled-adornment-password">
                  First name
                </InputLabel>
                <FilledInput
                  id="firstname"
                  type="text"
                  onChange={handleChange("firstname")}
                />
              </FormControl>

              <FormControl variant="filled" fullWidth margin="normal">
                <InputLabel htmlFor="filled-adornment-password">
                  Last name
                </InputLabel>
                <FilledInput
                  id="lastname"
                  type="text"
                  onChange={handleChange("lastname")}
                />
              </FormControl>

              <FormControl variant="filled" fullWidth margin="normal">
                <InputLabel htmlFor="filled-adornment-password">
                  Email Address
                </InputLabel>
                <FilledInput
                  id="email"
                  type="text"
                  onChange={handleChange("email")}
                />
              </FormControl>

              <FormControl variant="filled" fullWidth margin="normal">
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="password"
                  type={signupData.showPassword ? "text" : "password"}
                  value={signupData.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {signupData.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl variant="filled" fullWidth margin="normal">
                <InputLabel htmlFor="filled-adornment-confirmPassword">
                  Confirm Password
                </InputLabel>
                <FilledInput
                  id="confirmPassword"
                  type={signupData.showConfirmPassword ? "text" : "password"}
                  value={signupData.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle confirm password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                        edge="end"
                      >
                        {signupData.showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  type="submit"
                  style={{ marginTop: 20 }}
                >
                  Signup to Notflix
                </Button>

                <Link
                  to="/login"
                  className="link-outlined link-primary"
                  style={{ marginTop: 20 }}
                >
                  Switch to Login
                </Link>
              </FormControl>
            </form>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthorized,
    signupError: state.auth.signupError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignupSubmit: (signupFormData) => {
      dispatch(actionTypes.signupCreator(signupFormData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
