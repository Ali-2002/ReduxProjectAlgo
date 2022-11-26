import { combineReducers } from "redux";
import filmReducer from "./filmReducer";
import { searchReducer } from "./searchReducer";
const reducer = combineReducers({
  slider: filmReducer,
  searchMovies: searchReducer,
});

export default reducer;
