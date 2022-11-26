import { ActionTypes } from "../actions/actions-types";
const nameInitialState = {
  movies: [],
  moviesList: [],
  moviesSlide: [],
  postMovies: [],
};
const filmReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case ActionTypes.SLIDER:
      return {
        ...state,
        moviesSlide: action.payload,
      };
    default:
      return state;
  }
};
export default filmReducer;
