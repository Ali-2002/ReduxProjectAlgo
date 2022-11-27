import { combineReducers } from "redux";
import filmReducer from "./filmReducer";
import { linkActive } from "./linkActive";
import { searchReducer } from "./searchReducer";
const rootReducer = combineReducers({
  slider: filmReducer,
  movies: searchReducer,
  moviesList: searchReducer,
  linkActive: linkActive,
});

export default rootReducer;
