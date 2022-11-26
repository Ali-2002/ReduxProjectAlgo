import { combineReducers } from "redux";
import filmReducer from "./filmReducer";
const reducer = combineReducers({
  slider: filmReducer,
  searchMovies: filmReducer,
});

export default reducer;
