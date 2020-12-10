import * as actionTypes from "../actions/actionTypes";

const intialState = {
  selectedFlix: null,
  selectedGenre: "",
};

const flixReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.SELECTED_FLIX:
      return {
        ...state,
        selectedFlix: action.flix,
      };
    case actionTypes.SELECTED_GENRE:
      return {
        ...state,
        selectedGenre: action.genre,
      };
    default:
      return { ...state };
  }
};

export default flixReducer;
