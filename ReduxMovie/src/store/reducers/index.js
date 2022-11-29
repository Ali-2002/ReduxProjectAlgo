import { combineReducers } from "redux";
import { linkReducer } from "./linkReducer";
import filmReducer from "./filmReducer";
import { searchReducer } from "./searchReducer";
const rootReducer = combineReducers({
  slider: filmReducer,
  movies: searchReducer,
  linkActive: linkReducer,
});

export default rootReducer;
