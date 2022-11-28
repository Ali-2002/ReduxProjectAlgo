import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToList } from "../store/actions/actions";
import { RiHeartAddLine } from "react-icons/ri";
import { MdOutlineDoneOutline } from "react-icons/md";
const MovieItem = ({ movie, disabled }) => {
  const dispatch = useDispatch();
  const { linkActive } = useSelector((state) => state.linkActive);
  return (
    <>
      <div className="flex flex-col justify-center item-center text-center p-5 bg-[#202020] rounded-lg">
        <img
          className="w-64 flex justify-center rounded-lg shadow-lg m-auto"
          src={movie.Poster}
          alt={movie.Title}
        />
        <div className="w-72 text-center mb-3">
          <h3 className="text-white text-xl mt-4">{movie.Title}</h3>
          <p className="text-white text-xl">{movie.Year}</p>
        </div>
        <button
          disabled={disabled || linkActive}
          onClick={() => dispatch(addToList(movie.imdbID))}
          type="button"
          className="flex justify-center items-center"
        >
          {!disabled ? (
            <RiHeartAddLine size={50} style={{ color: "red" }} />
          ) : (
            <MdOutlineDoneOutline size={50} style={{ color: "white" }} />
          )}
        </button>
      </div>
    </>
  );
};

export default MovieItem;
