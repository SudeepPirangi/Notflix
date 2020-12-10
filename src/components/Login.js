import React, { useState, Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  Button,
  Typography,
  FormHelperText,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import * as actionTypes from "../store/actions/actionTypes";

const Login = (props) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [validator, setValidator] = useState({
    email: {
      value: loginData.email,
      touched: false,
      isValid: true,
      errMsg: "",
    },
    password: {
      value: loginData.password,
      touched: false,
      isValid: true,
      errMsg: "",
    },
  });

  const handleChange = (prop) => (event) => {
    let value = event.target.value.trim();
    setLoginData({ ...loginData, [prop]: value });
    switch (prop) {
      case "email":
        setValidator({
          ...validator,
          email: { ...validator.email, value: value, touched: true },
        });
        break;
      case "password":
        setValidator({
          ...validator,
          password: { ...validator.password, value: value, touched: true },
        });
        break;
      default:
        setValidator({ ...validator });
    }
  };

  const handleClickShowPassword = () => {
    setLoginData({ ...loginData, showPassword: !loginData.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();

    var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
    let tempEmailValidator = { touched: true };
    let tempPasswordValidator = { touched: true };

    if (loginData.email.length === 0) {
      tempEmailValidator.isValid = false;
      tempEmailValidator.errMsg = "Email cannot be empty";
    } else if (!regex.test(loginData.email)) {
      tempEmailValidator.isValid = false;
      tempEmailValidator.errMsg = "Email entered is invalid";
    } else {
      tempEmailValidator.isValid = true;
      tempEmailValidator.errMsg = "";
    }

    if (loginData.password.length === 0) {
      tempPasswordValidator.isValid = false;
      tempPasswordValidator.errMsg = "Password cannot be empty";
    } else if (
      loginData.password.length < 8 ||
      loginData.password.length > 15
    ) {
      tempPasswordValidator.isValid = false;
      tempPasswordValidator.errMsg = "Password must contain 8 to 15 characters";
    } else {
      tempPasswordValidator.isValid = true;
      tempPasswordValidator.errMsg = "";
    }

    if (tempEmailValidator.isValid && tempPasswordValidator.isValid) {
      console.log("Valid login");
      props.onLoginSubmit(loginData.email, loginData.password);
    } else {
      console.log("Invalid login");
      setValidator({
        ...validator,
        email: tempEmailValidator,
        password: tempPasswordValidator,
      });
    }
  };

  const LoginError = () => {
    if (props.loginError && props.loginError.length > 0) {
      return (
        <Typography
          component="h2"
          variant="h6"
          style={{ fontWeight: "bold", color: "red", marginTop: 20 }}
        >
          {props.loginError}
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
          User Login
        </Typography>

        <LoginError />

        <Grid container justify="center">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <form noValidate autoComplete="off" onSubmit={loginSubmitHandler}>
              <FormControl
                variant="filled"
                fullWidth
                margin="normal"
                error={!validator.email.isValid}
              >
                <InputLabel htmlFor="filled-adornment-password">
                  Email Address
                </InputLabel>
                <FilledInput
                  id="email"
                  type="text"
                  onChange={handleChange("email")}
                />
                <FormHelperText id="filled-weight-helper-text">
                  {validator.email.errMsg}
                </FormHelperText>
              </FormControl>

              <FormControl
                variant="filled"
                fullWidth
                margin="normal"
                error={!validator.password.isValid}
              >
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="password"
                  type={loginData.showPassword ? "text" : "password"}
                  value={loginData.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {loginData.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText id="filled-weight-helper-text">
                  {validator.password.errMsg}
                </FormHelperText>
              </FormControl>

              <FormControl>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  type="submit"
                  // disabled={
                  //   !validator.email.isValid || !validator.password.isValid
                  // }
                  style={{ marginTop: 20 }}
                >
                  Login to Notflix
                </Button>

                <Link
                  to="/signup"
                  className="link-outlined link-primary"
                  style={{ marginTop: 20 }}
                >
                  Switch to sign-up
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
  console.log("login auth state", state.auth.isAuthorized);
  return {
    isAuth: state.auth.isAuthorized,
    loginError: state.auth.loginError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginSubmit: (email, password) => {
      dispatch(actionTypes.loginCreator(email, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
