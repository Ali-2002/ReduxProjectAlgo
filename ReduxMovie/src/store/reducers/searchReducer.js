import { ActionTypes } from "../actions/actions-types";

const nameInitialState = {
  movies: [],
  moviesList: [],
};
export const searchReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_MOVIE:
      return {
        ...state,
        movies: action.payload,
      };
    case ActionTypes.ADD_TO_LIST:
      const movie = state.movies.find((item) => item.imdbID === payload);
      const moviesList = [...state.moviesList, { ...movie }];
      return { ...state, moviesList };

    case ActionTypes.REMOVE_FROM_LIST:
      const newMoviesList = state.moviesList.filter(
        (item) => item.imdbID !== payload
      );
      return { ...state, moviesList: newMoviesList };

    default:
      return state;
  }
};
