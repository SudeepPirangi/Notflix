import * as actionTypes from "../actions/actionTypes";

const initialState = {
  email: localStorage.getItem("email") || "",
  userId: localStorage.getItem("userId") || "",
  firstname: localStorage.getItem("firstname") || "",
  lastname: localStorage.getItem("lastname") || "",
  preferredLang: ["English"],
  preferredGenre: ["Horror", "Crime"],
  isAuthorized: JSON.parse(localStorage.getItem("isAuthorized")) || false,
  token: localStorage.getItem("token") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  expiresIn: localStorage.getItem("expiresIn") || null,
  signupError: "",
  loginError: "",
};

const setLocalStorage = (stateObj) => {
  for (let key in stateObj) {
    localStorage.setItem(key, stateObj[key]);
  }
};

const signupSuccessReducer = (state, action) => {
  let storableData = {
    email: action.response.data.email,
    userId: action.response.data.localId,
    firstname: action.inputData.firstname,
    lastname: action.inputData.lastname,
    isAuthorized: true,
    token: action.response.data.idToken,
    refreshToken: action.response.data.refreshToken,
    expiresIn: new Date(
      Date.now() + (+action.response.data.expiresIn - 2) * 1000
    ),
  };
  setLocalStorage(storableData);
  return {
    ...state,
    ...storableData,
    signupError: "",
    loginError: "",
  };
};

const signupFailureReducer = (state, action) => {
  let errorMsg = "Unable to Signup";
  if (action.response) {
    errorMsg = action.response.data.error.message;
  }
  return {
    ...state,
    isAuthorized: false,
    signupError: errorMsg,
  };
};

const loginSuccessReducer = (state, action) => {
  let storableLoginData = {
    email: action.response.data.email,
    userId: action.response.data.localId,
    firstname: "Sudeep",
    lastname: "Pirangi",
    isAuthorized: true,
    token: action.response.data.idToken,
    refreshToken: action.response.data.refreshToken,
    expiresIn: new Date(
      Date.now() + (+action.response.data.expiresIn - 2) * 1000
    ),
  };
  setLocalStorage(storableLoginData);
  return {
    ...state,
    ...storableLoginData,
    signupError: "",
    loginError: "",
  };
};

const loginFailureReducer = (state, action) => {
  let errorLoginMsg = "Unable to Login";
  if (action.errorResponse) {
    errorLoginMsg = action.errorResponse.data.error.message;
  }
  return {
    ...state,
    isAuthorized: false,
    loginError: errorLoginMsg,
  };
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_SUCCESS:
      return signupSuccessReducer(state, action);
    case actionTypes.SIGNUP_FAILURE:
      return signupFailureReducer(state, action);
    case actionTypes.LOGIN_SUCCESS:
      return loginSuccessReducer(state, action);
    case actionTypes.LOGIN_FAILURE:
      return loginFailureReducer(state, action);
    case actionTypes.LOGOUT:
      localStorage.clear();
      return {
        ...state,
        ...initialState,
      };
    default:
      return initialState;
  }
};

export default AuthReducer;
