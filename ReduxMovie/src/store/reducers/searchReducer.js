import { ActionTypes } from "../actions/actions-types";

const nameInitialState = {
    movies: [],
}
export const searchReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_MOVIE:
      return {
        ...state,
        movies: action.payload,
      };
        default:
            return state
    }
}