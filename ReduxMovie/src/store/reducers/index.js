import { combineReducers } from "redux";
import filmReducer from "./filmReducer";
import { searchReducer } from "./searchReducer";
const rootReducer = combineReducers({
  slider: filmReducer,
  movies: searchReducer,
});

export default rootReducer;
