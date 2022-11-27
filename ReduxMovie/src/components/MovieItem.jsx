import React from "react";
import { useDispatch } from "react-redux";
import { addToList } from "../store/actions/actions";
const MovieItem = ({ movie, disabled }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col justify-center item-center text-center p-5 bg-[#171919] shadow-lg backdrop-4 rounded-lg">
        <img className="w-64 flex justify-center rounded-lg shadow-lg m-auto" src={movie.Poster} alt={movie.Title} />
        <div className="w-72 text-center">
          <h3 className="text-white text-xl mt-4">{movie.Title}</h3>
          <p className="text-white text-xl">{movie.Year}</p>
        </div>
        <button
          onClick={() => dispatch(addToList(movie.imdbID))}
          type="button"
          className="inline-block text-white bg-[#44413f]  ease-in-out text-3xl m-auto px-5 py-3 rounded-md w-40 "
        >
          {!disabled ? "Add" : "Done"}
        </button>
      </div>
    </>
  );
};

export default MovieItem;
