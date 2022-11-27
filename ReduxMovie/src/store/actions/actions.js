import { ActionTypes } from "./actions-types";
import axios from "axios";

const key = "d825d3f6";
const apiKey = "6c485b233760419c89b5f73eded6e125";
const film = "Batman";

export const getMovies = async (name) => {
  try {
    const { movies } = await axios.get(
      `http://www.omdbapi.com/?s=${name}&apikey=${key}`
    );
    return movies.data.Search;
  } catch (error) {
    alert("Movies not found", error);
  }
};

export const slideData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${film}`
      );
      dispatch({
        type: ActionTypes.SLIDER,
        payload: data.results.slice(0, 5),
      });
    } catch (error) {
      console.log("Error");
    }
  };
};

export const searchMovies = (payload) => ({
  type: ActionTypes.SEARCH_MOVIE,
  payload,
});

export const addToList = (payload) => ({
  type: ActionTypes.ADD_TO_LIST,
  payload,
});

export const removeFromList = (payload) => ({
  type: ActionTypes.REMOVE_FROM_LIST,
  payload,
});

export const addPostMovie = (payload) => {
  type: ActionTypes.ADD_POST_MOVIES, payload;
};
