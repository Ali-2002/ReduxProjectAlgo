import React from "react";
import { useDispatch } from "react-redux";
import { addToList } from "../store/actions/actions";
const MovieItem = ({ Title, Year, Poster, imdbID, disabled }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col justify-center item-center text-center p-3 bg-[#121514] shadow-lg backdrop-4">
        <button
          disabled={disabled}
          onClick={() => dispatch(addToList(imdbID))}
          type="button"
          className="text-white bg-teal-400  ease-in-out text-3xl px-5 py-3 rounded-md "
        >
          disabled={disabled ? "Add" : "Done"}
        </button>
        <img className="w-64 flex justify-center" src={Poster} alt={Title} />
        <div className="w-72 text-center">
          <h3 className="text-white text-xl mt-4">{Title}</h3>
          <p className="text-white text-xl">{Year}</p>
        </div>
      </div>
    </>
  );
};

export default MovieItem;
