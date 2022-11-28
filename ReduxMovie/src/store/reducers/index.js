import { combineReducers } from "redux";
import { linkReducer } from "./linkReducer";
import filmReducer from "./filmReducer";
import { searchReducer } from "./searchReducer";
import { postMoviesReducer } from "./postMoviesReducer";
const rootReducer = combineReducers({
  slider: filmReducer,
  movies: searchReducer,
  linkActive: linkReducer,
  postMovies: postMoviesReducer,
});

export default rootReducer;
