import { ActionTypes } from "./actions-types";
import axios from "axios";

const key = "d825d3f6";
const apiKey="6c485b233760419c89b5f73eded6e125";
const film="Batman"
export const getMovies = (name) => {
  return async (dispatch) => {
    try {
      const {movies}= await axios.get(
        `http://www.omdbapi.com?s=${name}&apikey=${key}`
      );
      dispatch({
        type: ActionTypes.SEARCH_MOVIE,
        payload: movies.Search
      });
    } catch (error) {
      alert("Movies not found", error);
    }
  };
};

export const slideData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        //`http://www.omdbapi.com/?t=${film}&plot=full&apikey=${key}`
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${film}`
      );
      dispatch({
        type: ActionTypes.SLIDER,
        payload : data.results,
      });
    } catch (error) {
      console.log("Error")
    }
  };
};
