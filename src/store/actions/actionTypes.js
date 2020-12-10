import axios from "axios";

import CONSTANTS from "../../Constants";

// Auth Actions
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

// Auth Action creators

const signupSuccess = (signupFormData, res) => {
  return { type: SIGNUP_SUCCESS, inputData: signupFormData, response: res };
};
const signupFailure = (error) => {
  return { type: SIGNUP_FAILURE, response: error };
};
export const signupCreator = (signupFormData) => {
  const postData = {
    email: signupFormData.email,
    password: signupFormData.password,
    returnSecureToken: true,
  };
  // console.log("postData", postData);
  return (dispatch) => {
    axios
      .post(CONSTANTS.FIREBASE_SIGNUP_URI + CONSTANTS.FIREBASE_APIKEY, postData)
      .then((res) => {
        console.log("signup success", res);
        dispatch(signupSuccess(signupFormData, res));
      })
      .catch((error) => {
        console.log("signup post error: ", error.response);
        dispatch(signupFailure(error.response));
      });
  };
};

// Login Action Creators
const loginSuccess = (response) => {
  return { type: LOGIN_SUCCESS, response: response };
};
const loginFailure = (errorResponse) => {
  return { type: LOGIN_FAILURE, errorResponse: errorResponse };
};
export const loginCreator = (email, password) => {
  const postData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  // console.log("login data", postData);
  return (dispatch) => {
    axios
      .post(CONSTANTS.FIREBASE_SIGNIN_URI + CONSTANTS.FIREBASE_APIKEY, postData)
      .then((res) => {
        console.log("login success", res);
        dispatch(loginSuccess(res));
      })
      .catch((error) => {
        console.log("login failure", error.response);
        dispatch(loginFailure(error.response));
      });
  };
};

export const logoutCreator = () => {
  return { type: LOGOUT };
};

// Flix Action Creators
export const SELECTED_FLIX = "SELECTED_FLIX";
export const SELECTED_GENRE = "SELECTED_GENRE";

export const selectedFlixCreator = (flix) => {
  return { type: SELECTED_FLIX, flix: flix };
};

export const selectedGenreCreator = (genre) => {
  return { type: SELECTED_GENRE, genre: genre };
};
