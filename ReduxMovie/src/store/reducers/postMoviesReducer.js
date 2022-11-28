import { ActionTypes } from "../actions/actions-types";

const nameInitialState = {
  postMovies: [],
};
export const postMoviesReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case ActionTypes.POST_MOVIES:
      return { ...state, postMovies: [...state.postMovies, action.payload] };
    default:
      return state;
  }
};
