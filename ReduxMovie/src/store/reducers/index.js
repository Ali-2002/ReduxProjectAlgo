import { combineReducers } from "redux";
import { setLinkActive } from "../actions/actions";
import filmReducer from "./filmReducer";
import { searchReducer } from "./searchReducer";
const rootReducer = combineReducers({
  slider: filmReducer,
  movies: searchReducer,
  linkActive: setLinkActive,
});

export default rootReducer;
